import top from "./topBtn.js";

const footer = () => {
  let company_toggle = document.querySelector('.company__detail__toggle');
  let company_detail = document.querySelector('.company__detail');

  
  const companyToggleHandler = () => {
    company_toggle.classList.toggle('company__toggle__up');
    company_detail.classList.toggle('is--active');
  };

  const a11yCompanyHandler = (e) => {
    e.keyCode === 13 && companyToggleHandler();
  }
  
  company_toggle.addEventListener('click', companyToggleHandler);
  company_toggle.addEventListener('keyup', (e) => a11yCompanyHandler(e));
  top();
};

export default footer;

