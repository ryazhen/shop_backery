// const modal = document.querySelector(".backdrop");
// const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
// const modalBtnClose = document.querySelector(".modal-btn-close");

// const toggleModal = () => modal.classList.toggle("is-hidden");
// modalBtnOpen.addEventListener("click", toggleModal);
// modalBtnClose.addEventListener("click", toggleModal);
// ------------------------------------------

const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");
modalBtnClose.addEventListener("click", toggleModal);

modalBtnOpen.forEach((item) => {
  item.addEventListener("click", toggleModal);
});
// ------------------------------------------
// const modal = document.querySelector(".backdrop");
// const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
// const modalBtnClose = document.querySelector(".modal-btn-close");

// modalBtnOpen.forEach((item) => {
//   item.addEventListener("click", () => {
//     modal.classList.toggle("is-hidden");
//   });
// });

// modalBtnClose.addEventListener("click", () => {
//   modal.classList.toggle("is-hidden");
// });

// ------------------------------------------
