const header = document.querySelector(".header");
const toogleBtn = document.querySelector(".btn-mobile-nav");

// toogleBtn.classList.toggle("nav-open");

toogleBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
