const topBtn = () => {
  const top_btn = document.querySelector('.top__btn');

  const scrollHandler = () => {
    document.documentElement.scrollTop === 0 ? top_btn.classList.remove('is-active') : top_btn.classList.add('is-active');
  }

  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  }

  document.addEventListener('scroll', scrollHandler);
  top_btn.addEventListener('click', moveToTop);
};

export default topBtn;
