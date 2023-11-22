// Toggle class active untuk menu
const navbarnav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const seacrhBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  seacrhBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};


// klik di luar elemen
const hm = document.querySelector("#menu");
const sb = document.querySelector("#search-button");
const cb = document.querySelector("#cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!cb.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemdetailModal = document.querySelector("#item-detail-modal");
const itemdetailButtons = document.querySelectorAll(".item-detail-button");

itemdetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemdetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemdetailModal.style.display = "none";
  e.preventDefault();
};

// klik d luar modal

window.onclick = (e) => {
  if (e.target === itemdetailModal) {
    itemdetailModal.style.display = "none";
  }
};
