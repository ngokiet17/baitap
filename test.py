import heapq
from copy import deepcopy
import matplotlib.pyplot as plt
import numpy as np

def draw_state(state, title="Trạng thái hiện tại"):
    """Vẽ trạng thái trò chơi với các vòng màu"""
    num_columns = len(state)
    max_height = max(len(col) for col in state)
    
    fig, ax = plt.subplots(figsize=(num_columns, max_height))
    ax.set_xlim(-0.5, num_columns - 0.5)
    ax.set_ylim(-0.5, max_height)
    ax.set_xticks(range(num_columns))
    ax.set_xticklabels([f"Cột {i}" for i in range(num_columns)])
    ax.set_yticks([])
    ax.set_title(title)
    
    colors = {
        'red': 'red', 'blue': 'blue', 'green': 'green', 'yellow': 'yellow',
        'purple': 'purple', 'orange': 'orange', 'pink': 'pink', 'cyan': 'cyan'
    }
    
    for x, col in enumerate(state):
        for y, ring in enumerate(reversed(col)):
            ax.add_patch(plt.Rectangle((x - 0.4, y), 0.8, 0.8, color=colors.get(ring, 'gray'), ec='black'))
    
    plt.show()

def main():
    # Khởi tạo trò chơi với trạng thái ban đầu
    initial_state = [
        ['red', 'blue', 'green', 'yellow'],
        ['red', 'blue', 'green', 'yellow'],
        ['red', 'blue', 'green', 'yellow'],
        ['red', 'blue', 'green', 'yellow'],
        [],
        []
    ]

    game = RingSorter(initial_state)
    solution = game.solve()

    if solution:
        print("Các bước di chuyển để giải quyết trò chơi:")
        current_state = deepcopy(initial_state)
        draw_state(current_state, "Trạng thái ban đầu")
        
        for step, move in enumerate(solution, 1):
            print(f"Bước {step}: Chuyển từ cột {move[0]} sang cột {move[1]}")
            color = current_state[move[0]][-1]
            count = sum(1 for x in current_state[move[0]] if x == color)
            current_state[move[0]] = current_state[move[0]][:-count]
            current_state[move[1]] += [color] * count
            draw_state(current_state, f"Bước {step}")
    else:
        print("Không tìm thấy lời giải.")

class RingSorter:
    def __init__(self, initial_state):
        self.initial_state = initial_state
        self.target_state = self.get_target_state()

    def get_target_state(self):
        """Xác định trạng thái đích khi mỗi cột chỉ chứa vòng cùng màu."""
        target = []
        for column in self.initial_state:
            if column:
                target.append([column[0]] * len(column))
        while len(target) < len(self.initial_state):
            target.append([])
        return target

    def is_goal(self, state):
        """Kiểm tra xem trạng thái có phải là trạng thái đích không."""
        return state == self.target_state

    def get_possible_moves(self, state):
        """Tạo danh sách các nước đi hợp lệ từ trạng thái hiện tại."""
        moves = []
        for i, src in enumerate(state):
            if not src:
                continue  # Cột trống
            
            color = src[-1]  # Màu vòng trên cùng
            group_size = 1
            for j in range(len(src) - 2, -1, -1):
                if src[j] == color:
                    group_size += 1
                else:
                    break
            
            for j, dest in enumerate(state):
                if i != j:
                    if not dest or (dest[-1] == color and len(dest) + group_size <= 4):
                        new_state = deepcopy(state)
                        new_state[i] = new_state[i][:-group_size]
                        new_state[j] += [color] * group_size
                        moves.append((new_state, (i, j)))
        return moves

    def heuristic(self, state):
        """Hàm đánh giá heuristic: số lượng cột chưa hoàn thành."""
        return sum(1 for col in state if col and len(set(col)) > 1)

    def solve(self):
        """Giải bài toán bằng thuật toán A* tìm đường đi tối ưu."""
        pq = []
        heapq.heappush(pq, (0, self.initial_state, []))  # (cost, state, path)
        visited = set()
        
        while pq:
            cost, current_state, path = heapq.heappop(pq)
            state_tuple = tuple(tuple(col) for col in current_state)
            
            if state_tuple in visited:
                continue
            visited.add(state_tuple)
            
            if self.is_goal(current_state):
                return path  # Trả về danh sách nước đi
            
            for new_state, move in self.get_possible_moves(current_state):
                new_cost = cost + 1
                heapq.heappush(pq, (new_cost + self.heuristic(new_state), new_state, path + [move]))
        return None

if __name__ == "__main__":
    main()
