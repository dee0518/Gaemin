const footer = () => {
  let company_toggle = document.querySelector('.company__detail__toggle');
  let company_detail = document.querySelector('.company__detail');

  
  const companyToggleHandler = () => {
    company_toggle.classList.toggle('company__toggle__up');
    company_detail.classList.toggle('is--active');
  };
  
 
  
  company_toggle.addEventListener('click', companyToggleHandler);
  
};

export default footer;

