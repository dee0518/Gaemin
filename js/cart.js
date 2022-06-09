import header from "./header.js";

header();

const cart = () => {
  const delete_btn = document.querySelector('.cart__delete');
  delete_btn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });
}

cart();