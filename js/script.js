// Toggle class active
const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menut di klik
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

searchButton.onclick = () => {
  searchForm.classList.toggle("active");
  searchBox.focus();
};

// Klik di luar sidebar untuk element
document.addEventListener("click", function (e) {
  // Untuk menghilangkan nav
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  // untuk menghilangkan search
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
