const header = () => {
  let modal = document.querySelector('.modal');
  let header_location = document.querySelector('.header__location');
  let modal_body = document.querySelector('.modal__body');
  let body = document.querySelector('body');
  
  const modalHandler = () => {
    modal.style.display = 'block';
    modal_body.classList.add('on');
    body.style.overflow = 'hidden';
  };
  
  const modalOff = (e) => {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
    e.target.tagName === 'LI' && e.target.textContent !== '주소 추가' ? header_location.textContent = e.target.textContent : null;
  };
  
  header_location.addEventListener('click', modalHandler);
  modal.addEventListener('click', (e) => modalOff(e));
};

export default header;