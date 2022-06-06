let company_toggle = document.querySelector('.company__detail__toggle');
let company_detail = document.querySelector('.company__detail');
let modal = document.querySelector('.modal');
let header_location = document.querySelector('.header__location');
let modal_body = document.querySelector('.modal__body');
let body = document.querySelector('body');
let my_place_li = document.querySelectorAll('my__place li');

const companyToggleHandler = () => {
  company_toggle.classList.toggle('company__toggle__up');
  company_detail.classList.toggle('is--active');
};

const modalHandler = () => {
  modal.style.display = 'block';
  modal_body.classList.add('on');
  body.style.overflow = 'hidden';
};

const modalOff = () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
};

company_toggle.addEventListener('click', companyToggleHandler);
header_location.addEventListener('click', modalHandler);
modal.addEventListener('click', modalOff);
