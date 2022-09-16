import bill from './bill.js';

const orderDetail = async () => {
  const $orderDetailWrapper = document.querySelector('.order__detail__box__shadow__wrapper');
  const $bill = document.querySelector('.bill');
  const $form = document.querySelector('.order__detail__form');
  let orderDetail = null;
  let orderList = localStorage.getItem('cart') || null;

  const render = () => {
    const { id, title, content, img, price, outOfstock, extra } = orderDetail;
    // prettier-ignore
    $orderDetailWrapper.innerHTML = `
      <section class="order__detail__desc" id="id" style="${img !== '' ? `background-image: url(${img});` : ''}">
        <div class="order__detail__desc__content">
          <h2>${title}</h2>
          <p>${content}</p>
        </div>
      </section>
      <section class="order__detail__menu default">
        <h2>가격</h2>
        <p class="default__price">${price}원</p>
      </section>
      ${extra.map(({id : extraId, title, max, items}) => `<section class="order__detail__menu">
      <h2>${title}</h2>
      <ul class="${max === 1? 'order__detail__radio--group' : 'order__detail__chk--group'}">
        ${items.map(({id, name, price}) => `<li>
        <label for="${extraId}${id}">
          <span class="order__detail__name">${name}</span>
          <span class="order__detail__menu__price">+${price}원</span>
        </label>
        <input id="${extraId}${id}" type="${max === 1? 'radio' : 'checkbox'}" name="price" />
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
      orderDetail = data;
      const { categoryId, storeId, listId, itemId } = data;

      orderList = {
        id: 1,
        userId: 1,
        categoryId,
        storeId,
        storeName: '미소야',
        limitPrice: 8000,
        orders: [
          {
            id: 1,
            listId,
            itemId,
            title: '로스까츠',
            price: 10000,
            extra: [{ id: 1, name: '돈까스 추가', price: 4000 }],
          },
        ],
      };
      render();
      bill($bill, 8000, { categoryId, storeId, type: 'orderDetail' }, orderList);
    }
  } catch (e) {
    console.error(e);
  }

  // radion, checkbox on & off
  const changeInput = ({ target }) => {
    const { type } = target;

    if (type === 'radio') {
      target
        .closest('ul')
        .querySelectorAll('li')
        .forEach(item => item.classList.toggle('on', item === target.closest('li')));
    }

    if (type === 'checkbox') target.closest('li').classList.toggle('on');
  };

  // 수량 계산
  const calTotalNum = e => {
    if (!e.target.matches('.order__detail__total__btn--group button')) return;

    const $totalNum = document.querySelector('.order__detail__total__num');

    const delta = e.target.classList.contains('mius__btn') ? -1 : 1;
    $totalNum.textContent = +$totalNum.textContent + delta < 0 ? 0 : +$totalNum.textContent + delta;
  };

  const setCart = () => {
    localStorage.setItem('cart', JSON.stringify(orderList));
  };

  $orderDetailWrapper.addEventListener('change', changeInput);
  $orderDetailWrapper.addEventListener('click', calTotalNum);
  console.log($form);
  $form.addEventListener('submit', e => {
    e.preventDefault();
    setCart();
    window.location.href =
      window.location.origin +
      '/views/order.html' +
      window.location.search
        .split('&')
        .filter((_, i) => i === 0 || i === 1)
        .join('&');
  });
};

orderDetail();
