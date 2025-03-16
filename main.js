/*var fullName = 'ngo sy kiet';
var age = 19;
alert(fullName);
alert(age);

let username ;
 const name = 'ngo kiet';*/

 //có 3 loại câu điều kiện trong js (if, if...esel, if...esel if...esel)

 /*let age = 30;
 if(age > 19){
    console.log("đã đủ tuổi lấy vợ");
 }*/
 //if kiểm tra xem độ tuổi đã đủ điều kiện chưa và
 //nếu đủ thì sẽ trả ra true sai sẽ ra false

 /*let age = 18;
 if(age >= 19){
    console.log("bạn đã đủ tuổi đi tù");
 }else{
    console.log("bạn vẫn trẻ trâu")
 }*/
/*cho điều kiện đuổi là 18 nếu là lớn hơn hoặc bằng
19 thì if sẽ ra bạn đã đủ tuổi và ngược lại với else

  /*  let score = 85;
if (score >= 90) {
    console.log("Xếp loại A");
} else if (score >= 80) {
    console.log("Xếp loại B");
} else if (score >= 70) {
    console.log("Xếp loại C");
} else {
    console.log("Xếp loại D");
}*/
/*cho số điểm nếu mà A là lớn hơn hoặc bằng 90 
còn lại dưới sẽ là B,C,D*/


// các kiểu dữ liệu tròn js
 kiểu number có 5 dạng
- Overiew
let a = 5, b = 2.5;   
let c = 12e-3;  
let d = .25;   
let e = 10;  

 Operators 
let x = 5;
let y = "Hi " + x;  

special values
let x = NaN;
let y = Infinity;
typeof x;  
typeof(y);  

- NaN value
let x = 100 / "Apple";
isNaN(x);  

infinity value
 let x = 5;
 let y = 5 / 0;
 isFinite(x);  
 isFinite(y);  

//number methods
// let x = 123;
// x.toString();
// 123.toString();
// (100 + 23).toString();

//number properties
// Number.MAX_VALUE;  
// 123.MAX_VALUE; 

// kiểu 2 Boolean có 4 dạng
//- Overview
let b = false;
if (b) ...

// truthy và falsy
let x = 10, y = 0;
!!x;  // true
!!y;  // false

//properties và methods
// bollean tricks dạng này có 3 cách dùng 
//1. shorthand evaluate
//<condition> && <statement>; // trick này được 
// thực hiện tối ưu óa phép so sánh
//2 default value 
// function saveFile(fileName) {
//     if (fileName === "")
//         fileName = "Noname.txt";
// }// dùng để kiểm tra dữ liệu đầu vào và kiểm tra dữ liệu có 
// tồn tại hay không
//3. Number tricks
// a && b: nếu a là truthy thì trả về b, nếu a là falsy thì trả về a
// 10 && 20 = 20;
// 0 && 20 = 0;

// // a || b: nếu a là truthy thì trả về a, nếu a là falsy thì trả về b
// 10 || 20 = 10;
// 0 || 20 = 20;// sử dụng cho 2 phép and và or

//kiểu String có 2 dạng mỗi dạng được chia ra nhiều kiểu
//1. Overview chứa 2 kiểu
let s1 = "I'm Vu";  // Dùng nháy kép, vì bên trong có nháy đơn
let s2 = 'He said "ABC" yesterday';
    // Dùng nháy đơn, vì bên trong có nháy kép
// dùng để lưu dữ liệu dưới dạng text 
//1.1 Escape character 
let hello1 = "He said "ABC" yesterday";  // Sai
let hello2 = "He said \"ABC\" yesterday";  // Ok
//string không thể chứa trực tiếp 1 số kí tự do không gõ được trên phim
// lên cần thoát nó bằng cách chèn dấu \(backslash)
//1.2 Line breaking
let s1 =
    "Hello world";  // Ok
let s2 = "Hello
    world";  // Sai
//khi viết code k nên dài quá 80 kí tự 1 dòng
// trong trường hợp nếu muốn ngắt ngay giữu string thì phải viết dáu \ ở cuối
let s = "Hello \
    world";

//2.Properties và methods có tất cả 10 dạng
//2.1 length property trả về độ dài của chuỗi
let s = "ABC";
s.length;  // 3
s.length();  // Sai
//2.2 Access character dùng để lấy kí tự và mã tại 2 vị trí
let s = "ABC";
s[0];  // A
s.charAt(1);  // B
s.charCodeAt(2);  // 67 (mã của kí tự C là 67)
//2.3 string concat dùng để nối các chuỗi 
let s1 = "Hello";
let s2 = "world";
let s3 = s1 + " " + s2;  // Dùng phép cộng
let s4 = s1.concat(" ", s2;  // Dùng method concat
let s5 = [s1, s2].join(" ");  // Gom thành mảng rồi join thành chuỗi
//2.4 Trim method để loại bỏ các khoảng trắng ở dầu và cuối chuỗi
let s = "   This string has 3 spaces before and 2 spaces after  ";
s.trim();  // s = "This string ... after"
//2.5 Uppercase,Lowecase dùng để chuyển chuỗi thành hoa/ thường là toàn bộ
let s = "Hello World";
s.toUpperCase();
s.toLowerCase();
//2.6 Find sunbstring position để tìm vị trí chuỗi con
let s = "Anh yeu anh";
s.indexOf("nh");  // Tìm thuận
s.lastIndexOf("nh");  // Tìm ngược
s.search("anh");  // Tìm bằng chuỗi
s.search(/anh/i);  // Tìm khớp regex
//2.7 Extract substring dùng để trích suất 1 phần chuỗi
let s = "Anh yeu anh";
s.substring(0, 3);  // Từ đầu - kết thúc tại index 3 (space)
s.slice(-3);  // Từ index -3 tới hết chuỗi
//2.8 Replace method dùng để thay thế 1 phần của chuỗi
let s = "Anh yeu em cua anh";
s.replace("anh", "em");  // "Anh yeu em cua em"
s.replace(/anh/gi, "em");  // "em yeu em cua em"
//2.9 Split method dùng để tách chuỗi thành 1 mảng các chuỗi con
let s = "Viet Nam vo dich";
s.split("");  // Param chuỗi rỗng, tách từng kí tự
s.split(" ");  // Dấu phân cách là space, tách từng từ
//2.10 ES6 new method bổ sung thêm 1 số method
let s = "Hello world";
s.startsWith("Hello");  // true
s.endsWith(".");  // false
s.includes("o");  // true

// kiểu Aray 1 có 3 dạng
//1 Overview (mảng) cho phép lưu trữ nhiều giá trị trong 1 biến duy nhất
// và nó 2 kiểu
//1.1 Array declaration khai báo tên mảng và danh sach các value trong cặp[]
let primes = [2, 3, 5, 7];
let names = ["Vu", "John"];
let points = ["Vu", 10, "John", 9.5];
let empty = [];
//1.2 Access array element sử dụng chỉ 1 số index để truy cập phần tử tính từ 0
let third_prime = primes[2];
// 2 Array and object có 4 kiểu 
//2.1 Array is an object 
//2.2 creating array as an object thay vì khai báo thông thường ta có thể khai báo bằng từ new
let primes = new Array(2, 3, 5, 7);
//2.3 Associative array dùng để đặt tên
let age = [];
age["John"] = 19;
age["Josie"] = 20;
//2.4 Compare array dùng để so sánh
//3 Properties & methods 1 có 5 kiểu
//3.1 Length property trả về độ dài mảng
primes.length;  // Ok
primes.length();  // Sai
//3.2 Unshift & push method trả về độ dài mảng mới push() thêm vào cuối còn unshift()
let primes = [5];
primes.push(7);  // Thêm 7 vào cuối
primes.unshift(2, 3);  // Thêm 2, 3 vào đầu
    // Primes = [2, 3, 5, 7]
//3.3 Shift & pop method dùng để xóa elemnt ra khỏi mảng và return giá trị vừa xóa
primes.pop();  // 7
primes.shift();  // 2
    // Primes = [3, 5]
//3.4  Delete element dùng xóa element của array 
delete primes[2];  // Xóa phần tử thứ 3
//3.5 xóa toàn bộ mảng















    
