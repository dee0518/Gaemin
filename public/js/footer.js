import goToTop from "./goToTop.js";

const footer = () => {
  let company_detail = document.querySelector(".footer__toggle__company");
  let company_toggle = company_detail.querySelector("h2");

  const companyToggleHandler = () => {
    company_detail.classList.toggle("up");
  };

  const a11yCompanyHandler = (e) => {
    e.keyCode === 13 && companyToggleHandler();
  };

  company_toggle.addEventListener("click", companyToggleHandler);
  company_toggle.addEventListener("keyup", a11yCompanyHandler);
  goToTop();
};

export default footer;
