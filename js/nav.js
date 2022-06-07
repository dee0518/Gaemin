const nav = () => {
  const nav_li = document.querySelectorAll('.nav__li a');

  const liHandler = (el, e) => {
    e.preventDefault();
    nav_li.forEach(x => {
      if (x.classList.contains('selected')) {
        x.classList.remove('selected');
        x.removeAttribute('aria-selected');
      }
    });
    el.classList.add('selected');
    el.setAttribute('aria-selected', 'true');
  }

  nav_li.forEach(x => x.addEventListener('click', (e) => liHandler(x, e)));
}

export default nav;