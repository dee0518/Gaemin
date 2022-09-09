const goToTop = () => {
  const $goToTopBtn = document.querySelector(".go__to__top__btn");

  $goToTopBtn !== null &&
    $goToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    });
};

export default goToTop;
