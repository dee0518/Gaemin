import header from "./header.js";

header();

const cart = () => {
  const delete_btn = document.querySelector('.cart__delete');
  const bill = document.querySelector('.bill');
  const tung1 = document.querySelector('.cart__order__detail h2');
  const tung2 = document.querySelector('.cart__order__detail article');
  const total_count = document.querySelector('.total__count--group');
  delete_btn.addEventListener('click', () => {
    localStorage.clear();     
    // location.reload();
    bill.classList.add('off');
    tung1.style.display = 'none';    
    tung2.style.display = 'none';
    total_count.style.display = 'none'; 
  });
}

cart();