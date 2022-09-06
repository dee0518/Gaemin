const goToTop = () => {
  const top_btn = document.querySelector(".go__to__top__btn");

  const moveToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  top_btn.addEventListener("click", moveToTop);
};

export default goToTop;
