const bill = ($bill, limit, info, orderList) => {
  const $billList = $bill.querySelector('.bill__list');
  const $billLimit = $bill.querySelector('.bill__total__limit');
  const $billSubmit = $bill.querySelector('.submit__btn');

  const { limitPrice, orders } = orderList;
  const totalPrice =
    orders.length > 0
      ? orders
          .map(({ price, extra }) => price + extra.reduce((acc, cur) => acc + cur.price, 0))
          .reduce((acc, cur) => acc + cur, 0)
      : 0;

  $billLimit.textContent = `배달최소주문금액 ${limitPrice}원`;
  // prettier-ignore
  $billList.innerHTML =
    orderList.length <= 0
      ? `<div class="empty"></div>`
      : ` <ul class="bill__total__list desktop">
        <li class="bill__total__item">
          ${orders.map(({title, price, extra}) => `<span class="bill__total__item__product">
            ${title}
            <span>${price}원</span>
          </span>
          ${extra.length <= 0 ? '' : `<ul class="bill__total__detail__list">
            ${extra.map(({name, price}) => `<li class="bill__total__item">
              <span class="bill__total__item__product">${name}<span>${price}원</span></span>
            </li>`).join('')}
          </ul>`}
          `).join('')}
        </li>
      </ul>
      <p class="bill__total__price"><span>총결제금액</span><span class="total__price">${totalPrice}원</span></p>`;

  $billSubmit.innerHTML =
    orderList.length <= 0 && info.type === 'orderDetail'
      ? `<span>담아주세요</span>`
      : `${
          orderList.length > 0
            ? `<span class="total__count--group">
          <span class="sr-only">총</span>
          <span class="total__count">${orderList.length}</span>
          <span class="sr-only">개</span></span>`
            : ''
        }
        <span>${totalPrice}원 담기</span>`;
};

export default bill;
