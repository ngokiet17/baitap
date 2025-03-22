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
    ? "./assets/co-anh.png"
    : "./assets/coVN.png";

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
  
  
}