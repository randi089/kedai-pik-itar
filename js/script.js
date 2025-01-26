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
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const namaProduk = document.querySelector(".modal h3");
const imageProduk = document.querySelector(".modal img");
const harga = document.querySelector(".modal .item-price");
const stars = document.querySelectorAll(".star");
const dataProduk = [
  {
    nama: "Permen Jagoan Neon",
    stars: 5,
    harga: "IDR 500",
    image: "jagoan-neon.jpg",
    hlama: "IDR 1K",
  },
  {
    nama: "Silkys Marshmallow",
    stars: 4,
    harga: "IDR 1K",
    image: "silkys-marshmallow.jpg",
    hlama: "IDR 2K",
  },
  {
    nama: "Royale 500",
    stars: 3,
    harga: "IDR 500",
    image: "royale-500.jpg",
    hlama: "IDR 1K",
  },
];

itemDetailButtons.forEach((itemDetailButton, i) => {
  itemDetailButton.onclick = () => {
    itemDetailModal.style.display = "flex";
    namaProduk.textContent = dataProduk[i].nama;
    imageProduk.setAttribute("src", "img/unggulan/" + dataProduk[i].image);
    harga.innerHTML =
      dataProduk[i].harga + ` <span>${dataProduk[i].hlama}</span>`;
    stars.forEach((star, j) => {
      if (j < dataProduk[i].stars) {
        star.classList.add("star-full");
      } else {
        star.classList.remove("star-full");
      }
    });
  };
});

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
