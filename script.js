"use strict";

const modalBtn = document.querySelectorAll(".modal_button");
const modalBody = document.querySelector('.modal_body')
const modalOverlay = document.querySelector(".modal_overlay")
const modalClose = document.querySelector(".modal_close")

const openModal = function () {
  modalBody.classList.remove("hidden")
  modalOverlay.classList.remove("hidden")
}
const closeModal = function () {
  modalBody.classList.add("hidden")
  modalOverlay.classList.add("hidden")
}

for (let i = 0; i < modalBtn.length; i++)
  modalBtn[i].addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalBody.classList.contains("hidden")) {
    closeModal()
  }
})
