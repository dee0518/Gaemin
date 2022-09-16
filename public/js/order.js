import bill from './bill.js';

const order = async () => {
  const $storeHeader = document.querySelector('.store__header');
  const $storeCoupon = document.querySelector('.store__header__coupon');
  const $tabsContainer = document.querySelector('.store__order__info__tabs');
  const $tabsHeader = document.querySelectorAll('.store__order-info__tabs__header');
  const [$deliveryTabInfo, $pickupTabInfo] = document.querySelectorAll('.store__order-info__tabs__list');
  const $storeMenu = document.querySelector('.store__main__menu');
  const $bill = document.querySelector('.bill__total');
  let storeState = null;
  let orderList = localStorage.getItem('cart') || null;

  const renderInitial = () => {
    const {
      id,
      type,
      name,
      info: { address, delivery, pickup, rating, likeNum },
      ownerComment,
      review,
      thumbnail,
      menu,
      coupon,
    } = storeState;
    const starNum = Math.floor(rating);
    const restNum = 5 - rating;

    $storeHeader.style.backgroundImage = `url(${thumbnail})`;
    $storeHeader.innerHTML = `<div class="store__header__title-card">
      <h2 class="store__header__title-card__name">${name}</h2>
      <div class="store__header__title-card__star-point">
        ${'<span class="star star-full"></span>'.repeat(starNum)}
        ${
          restNum % 1 < 0.5 && restNum % 1 !== 0
            ? '<span class="star star-full"></span>'
            : '<span class="star star-half"></span>'
        }
        ${'<span class="star star-empty"></span>'.repeat(Math.floor(restNum))}
        <span class="store__header__title-card__star-point__num">${rating}</span>
      </div>
      <div class="store__header__title-card__review">
        <span class="store__header__title-card__review__recent-review">최근리뷰 ${review}</span>
        <span aria-hidden="true">|</span>
        <span class="store__header__title-card__review__recent-manager-reply">최근사장님댓글 ${ownerComment}</span>
      </div>
      <div class="store__header__title-card__contect">
        <a href="tel:050881949965" type="button" class="store__header__title-card__contect__tel"> 전화</a>
        <button class="store__header__title-card__contect__zzim">찜 ${likeNum}</button>
        <button class="store__header__title-card__contect__share">공유</button>
      </div>
    </div>`;

    $storeCoupon.innerHTML =
      coupon.length > 0
        ? coupon
            .map(({ id, name }) => `<button class="store__header__coupon__btn" id="coupon${id}">${name}</button>`)
            .join('')
        : '';

    $deliveryTabInfo.innerHTML = `<dt class="store__order-info__list__min-order-price">최소주문금액</dt>
      <dd class="store__order-info__list__min-order-price__value">${delivery.limit}원</dd>
      <dt class="store__order-info__list__pay-method">결제방법</dt>
      <dd class="store__order-info__list__pay-method__value">${delivery.payment.join(', ')}</dd>
      <dt class="sotre__order-info__list__delivery-tip">배달팁</dt>
      <dd class="sotre__order-info__list__delivery-tip__value">${
        delivery.tips.length === 1 ? delivery.tips[0] : `${delivery.tips[0]}~${delivery.tips[1]}`
      }원</dd>
      <dt class="sotre__order-info__list__delivery-time">배달시간</dt>
      <dd class="sotre__order-info__list__delivery-time__value">${delivery.time[0]}~${
      delivery.time[1]
    }분 소요예상</dd>`;

    $pickupTabInfo.innerHTML = `<dt class="store__order-info__list____discount">최소주문금액<span class="badge-question"></span></dt>
    <dd class="store__order-info__list____discount__value">
      ${pickup.limit}원
      <span class="store__order-info__list____discount__value__detail">${pickup.memo}</span>
    </dd>
    <dt class="store__order-info__use-method">이용방법</dt>
    <dd class="store__order-info__use-method__value">${pickup.howToUse.join(', ')}</dd>
    <dt class="store__order-info__pick-up-time">픽업시간</dt>
    <dd class="store__order-info__pick-up-time__value">
    ${pickup.time[0]}~${pickup.time[1]}분 소요 예상<span class="badge-question"></span>
    </dd>
    <dt class="store__order-info__pick-up-time">위치안내</dt>
    <dd class="store__order-info__pick-up-time__value">${address}</dd>
    <dt class="store__order-info__pay-method">결제방법</dt>
    <dd class="store__order-info__pay0method__value">${pickup.payment.join(', ')}</dd>`;

    // prettier-ignore
    $storeMenu.innerHTML = `<h4 class="store__main__menu__title sr-only" role="tab">메뉴</h4>
      <ul class="store__main__menu__tab__list" role="tablist">
        ${menu.map(({ id, title }) =>
            `<li class="store__main__menu__tab__item" role="tab"><a href="#menu${id}">${title}</a></li>`
          ).join('')}
      </ul>   
      <p class="store__main__menu__desc">
        <span class="badge-cesco">세스코 멤버스</span>
        강남역 신분당선 6번출구 지하 1층 출입구에서 운영중입니다.
      </p>
      ${menu.map(({id, category, title, list}) => `<div class="${category} store__main__menu__category" role="tabpanel" id="menu${id}">
          <h5 class="store__main__menu__category__title">${title}</h5>
          <ul class="store__main__menu__category__list">
            ${list.map(({id: itemId, title, img, content, price, outOfstock}) => `<li class="signature store__main__menu__category__item">
              <a href="/views/orderDetail.html${window.location.search}&listId=${id}&itemId=${itemId}">
                <div class="store__main__menu__category__item__img">
                  ${img !== ''? `<img src="${img}" alt="" />`: ''}
                </div>
                <h6 class="signature store__main__menu__category__item__heading">
                  ${category === 'signature' ? '<span class="badge-signature" aria-label="인기 상품"></span>':''}
                  ${title}
                </h6>
                <p class="store__main__menu__category__item__desc__wrapper">
                  <span class="store__main__menu__category__item__desc">${content}</span>
                  <span class="store__main__menu__category__item__price">${price}원</span>
                  ${outOfstock? '<span class="store__main__menu__category__item__detail warning">품절되었습니다.</span>': ''}
                </p>
              </a>
            </li>`).join('')}
          </ul>
        </div>`).join('')}`;
  };

  try {
    const { status, data } = await axios.get('/storeDetail' + window.location.search);
    if (status === 200) {
      storeState = data;
      const { categoryId, storeId } = data;
      if (orderList === null) {
        orderList = {
          userId: 1,
          categoryId,
          storeId,
          storeName: '미소야',
          limitPrice: 8000,
          orders: [],
        };
      }

      renderInitial();
      bill($bill, 8000, { categoryId, storeId, type: 'order' }, orderList);
    }
  } catch (e) {
    console.error(e);
  }

  $tabsContainer.addEventListener('keyup', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowRight') return;
  });

  $tabsContainer.addEventListener('click', e => {
    if (!e.target.matches('.store__order-info__tabs__header')) return;

    $tabsHeader.forEach(header => {
      const isSame = e.target === header;

      header.classList.toggle('on', isSame);
      header.setAttribute('tab-index', isSame ? 0 : -1);
    });
  });
};

order();
