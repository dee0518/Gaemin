(function(){
  const slider = document.querySelector('.live__special__container');
  const aLink = slider.querySelectorAll('a');
  let isDown = false;
  let startX;
  let scrollLeft;
  

  document.addEventListener("DOMContentLoaded", () => {
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });
    
    slider.addEventListener('mouseup', (e) => {
      isDown = false;
    });
    
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  })
})();