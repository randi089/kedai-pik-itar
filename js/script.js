// Toggle class active
const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menut di klik
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika class active untuk shopping cart
const shoppingCartButton = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");

// Ketika hamburger menut di klik
shoppingCartButton.onclick = () => {
  shoppingCart.classList.toggle("active");
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
  // untuk menghilangkan shopping cart
  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");

document.onclick = (itemDetailButton) => {
  if (
    itemDetailButton.target.parentElement.className === "item-detail-button" ||
    itemDetailButton.target.className === "item-detail-button"
  ) {
    itemDetailModal.style.display = "flex";
  }
};

// klik tombol close modal
const closeButtonModal = document.querySelector(".modal .close-icon");

closeButtonModal.onclick = () => {
  itemDetailModal.style.display = "none";
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
