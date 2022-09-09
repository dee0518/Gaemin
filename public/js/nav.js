const nav = () => {
  const navList = document.querySelector('.nav__sub__list');
  const navItems = document.querySelectorAll('.nav__sub__list__item');

  navList.addEventListener('click', e => {
    if (!e.target.closest('.nav__sub__list__item')) return;
    e.preventDefault();

    navItems.forEach(item => {
      const isSame = item === e.target.closest('li');

      item.classList.toggle('selected', isSame);
      item.querySelector('a').setAttribute('aria-selected', isSame);
    });
  });
};

export default nav;
