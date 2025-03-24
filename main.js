// Normal fn
// function changeLanguage() {
//     console.log('abc');

// }

// Arrow fn
// en = english
// vi = VietNam
// Làm thế nào đẻ đổi được ngôn ngữ thay đổi url trên trang web
// Ví dụ: vi = http://127.0.0.1:5500/index.html?=vi
const changeLanguage = () => {
  const currentImage = document.querySelector(".change_language > img");
  const checkCurrentLang = currentImage.src.includes("vi");
  // Lấy ra node hiện tại
  currentImage.src = checkCurrentLang
    ? "./img/eng.png"
    : "./img/vi.png";

  if ("undefined" !== typeof history.pushState) {
    history.pushState(
      { page: "index.html" },
      "",
      checkCurrentLang ? "index.html" : "index.html?=vi"
    );
  } else {
    window.location.assign(url);
  }

  // Bấm vào mình đổi ngôn ngữ của phần header
  // Phân tích: if else nếu đúng đổi thành tiếng việt sai thì đổi ve tiếng anh
  const homeHeader = document.getElementById('home')
  const projectHeader = document.getElementById('project')
  const skillsHeader = document.getElementById('skills')
  const contactHeader = document.getElementById('contact')
  if (!checkCurrentLang) {
    // Tiếng việt
    homeHeader.innerText = 'Trang chủ'
    projectHeader.innerText = 'Dự án'
    skillsHeader.innerText = 'Kỹ năng'
    contactHeader.innerText = 'Liên hệ'
  } else {
    // Tiếng anh
    homeHeader.innerText = 'Home'
    projectHeader.innerText = 'Project'
    skillsHeader.innerText = 'Skills'
    contactHeader.innerText = 'Contact'
  }

// Xác định ngôn ngữ mặc định (có thể lấy từ URL hoặc localStorage)
let lang = "vn"; // Đổi thành "en" nếu cần

// Lấy phần tử cần dịch
const titleElement = document.querySelector(".infomation h1");
const summaryElement = document.querySelector(".summary");

// Dịch bằng toán tử ba ngôi
titleElement.innerHTML = lang === "vn" 
    ? `Chào bạn, tôi là Kiệt,<br />Nhà phân tích kinh doanh` 
    : `Hi, I am Kiệt,<br />Business Analyst`;

summaryElement.innerText = lang === "vn" 
    ? `Tôi là Nhà phân tích kinh doanh với 3 năm kinh nghiệm trong việc phân tích quy trình kinh doanh,
    thu thập yêu cầu và tối ưu hóa quy trình làm việc. Cột mốc sự nghiệp tiếp theo của tôi
    là khẳng định mình là Nhà phân tích kinh doanh hàng đầu hoặc
    Tư vấn doanh nghiệp CNTT, tận dụng khả năng giải quyết vấn đề của tôi để
    thúc đẩy thành công trong kinh doanh. Hãy kết nối và hợp tác!` 
    : `I am a Business Analyst with 3YoE in analyzing business processes,
    gathering requirements, and optimizing workflows. My next career
    milestone is to establish myself as a top-tier Business Analyst or
    IT Corporate Consultant, leveraging my problem-solving abilities to
    drive business success. Let’s connect and collaborate!`;
}
  