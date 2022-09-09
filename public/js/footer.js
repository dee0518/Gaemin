import goToTop from "./goToTop.js";

const footer = () => {
  let $companyDetail = document.querySelector(".footer__toggle__company");
  let $companyToggle = $companyDetail.querySelector("h2");

  const companyToggleHandler = () => {
    $companyDetail.classList.toggle("up");
  };

  $companyToggle.addEventListener("click", companyToggleHandler);
  $companyToggle.addEventListener("keyup", (e) => {
    e.keyCode === 13 && companyToggleHandler();
  });
  goToTop();
};

export default footer;
