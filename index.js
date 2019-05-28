const modal = document.querySelector(".modal");
const open = document.querySelector("#modalOpen");
const close = document.querySelector("#modalClose");
const overlay = document.querySelector(".modal__overlay");

const modalOpen = () => {
  modal.classList.remove("hidden");
};

const modalClose = () => {
  modal.classList.add("hidden");
};

function init() {
  open.addEventListener("click", modalOpen);
  close.addEventListener("click", modalClose);
  overlay.addEventListener("click", modalClose);
}

init();
