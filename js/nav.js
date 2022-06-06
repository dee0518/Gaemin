const nav = () => {
  const nav_li = document.querySelectorAll('.nav_li a');

  const liHandler = (el, e) => {
    e.preventDefault();
    nav_li.forEach(x => x.classList.contains('selected') ? x.classList.remove('selected') : null);
    el.classList.add('selected');
  }

  nav_li.forEach(x => x.addEventListener('click', (e) => liHandler(x, e)));
}