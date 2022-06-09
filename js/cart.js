import header from "./header.js";

header();

const cart = () => {
  const delete_btn = document.querySelector('.cart__delete');
  const bill = document.querySelector('.bill');
  const tung1 = document.querySelector('.cart__order__detail h2');
  const tung2 = document.querySelector('.cart__order__detail article');
  const total_count = document.querySelector('.total__count--group');
  const bill_item = document.querySelector('.bill__total__item__product');
  const total_price = document.querySelector('.total__price');
  delete_btn.addEventListener('click', () => {
    localStorage.clear();     
    // location.reload();
    bill.classList.add('off');
    bill.style.height = '520px';
    tung1.style.display = 'none';    
    tung2.style.display = 'none';
    total_count.style.display = 'none';
    bill_item.style.display = 'none';
    total_price.innerHTML = '0원'
  });
}

cart();