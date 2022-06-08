const body = document.querySelector('body');
const payBtn = document.querySelector('.cart__payment__btn');
const receit = document.querySelector(".receit__modal");
const exit = document.querySelector(".receit__exit");

const receitHandler = (e) => {
  receit.style.display = 'block';
  body.style.overflow = 'hidden';
}

const receitOff = (e) => {
  receit.style.display = 'none';
  body.style.overflow = 'initial';
}

exit.addEventListener("click", (e) => {
  receitOff(e);
});

receit.addEventListener("click", (e) => {
  receitOff(e);
})

payBtn.addEventListener("click", (e) => {
  receitHandler(e);
})
