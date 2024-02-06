const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelectorAll(".menu-btn-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
menuBtnOpen.addEventListener("click", toggleMenu);

menuBtnClose.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});
