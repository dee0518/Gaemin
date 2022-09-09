const orderDetail = async () => {
  const $orderDetailWrapper = document.querySelector('.order__detail__box__shadow__wrapper');
  // const ulGroup = document.querySelectorAll('ul[class*=order__detail__]');
  // const billContainer = document.querySelector('.bill');
  // const submitBtn = document.querySelector('button[type=submit]');
  // const miusBtn = document.querySelector('.mius__btn');
  // const plusBtn = document.querySelector('.plus__btn');
  // const totalCount = document.querySelector('.order__detail__total__num');
  // const totalCount2 = document.querySelector('.total__count');

  const num = 1;

  const render = ({ id, title, content, img, price, outOfstock, extra }) => {
    // prettier-ignore
    $orderDetailWrapper.innerHTML = `
      <section class="order__detail__desc" id="id" style="${img !== '' ? `background-image: url(${img});` : ''}">
        <div class="order__detail__desc__content">
          <h2>${title}</h2>
          <p>${content}</p>
        </div>
      </section>
      ${extra.map(({id, title, max, items}) => `<section class="order__detail__menu">
      <h2>${title}</h2>
      <ul class="order__detail__radio--group">
        ${items.map(({id, name, price}) => `<li>
        <label for="extra${id}">
          <span class="order__detail__name">${name}</span>
          <span class="order__detail__menu__price">+${price}원</span>
        </label>
        <input id="extra${id}" type="${max === 1? 'radio' : 'checkbox'}" name="price" />
      </li>`).join('')}
      </ul>
    </section>`).join('')}
    <section class="order__detail__total">
      <h2>수량</h2>
      <div class="order__detail__total__btn--group">
        <button type="button" class="mius__btn" aria-label="수량 하나 줄이기"></button>
        <span><span class="order__detail__total__num">1</span>개</span>
        <button type="button" class="plus__btn" aria-label="수량 하나 더하기"></button>
      </div>
    </section>
    `;
  };

  try {
    const { data, status } = await axios.get('/menu' + window.location.search);
    if (status === 200) {
      render(data);
    }
  } catch (e) {
    console.error(e);
  }

  // radion, checkbox on & off
  const changeInput = target => {
    const { type } = target;

    if (type === 'radio') {
      target
        .closest('ul')
        .querySelectorAll('li')
        .forEach(item => item.classList.toggle('on', item === target));
    }

    if (type === 'checkbox') target.closest('li').classList.toggle('on');

    // if (billContainer.className.includes('off')) {
    //   billContainer.classList.remove('off');
    //   submitBtn.disabled = false;
    // }
  };

  // 수량 계산
  const calTotalNum = e => {
    if (!e.target.matches('.order__detail__total__btn--group button')) return;

    const $totalNum = document.querySelector('.order__detail__total__num');

    const delta = e.target.classList.contains('mius__btn') ? -1 : 1;
    $totalNum.textContent = +$totalNum.textContent + delta < 0 ? 0 : +$totalNum.textContent + delta;
  };

  const setCart = () => {
    console.log('hi');
    localStorage.setItem('cart', num);
  };

  $orderDetailWrapper.addEventListener('change', changeInput);
  $orderDetailWrapper.addEventListener('click', calTotalNum);

  // document.addEventListener('DOMContentLoaded', () => {
  //   totalCount.innerHTML = 1;
  //   ulGroup.forEach(ul => {
  //     ul.addEventListener('click', changeInput);
  //   });

  //   miusBtn.addEventListener('click', calTotalNum);
  //   plusBtn.addEventListener('click', calTotalNum);
  // });

  // submitBtn.addEventListener('click', setCart);
};

orderDetail();
