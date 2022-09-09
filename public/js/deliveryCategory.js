/* eslint-disable import/extensions */
import footer from './footer.js';
import header from './header.js';

header();
footer();

const getStore = async () => {
  const $contentsWrapper = document.querySelector('.dc__wrapper');

  try {
    const { data, status } = await axios.get('/store' + window.location.search);

    if (status === 200) {
      document.querySelector(`.nav__sub__list__item#sub${data.id}`).classList.add('selected');

      // prettier-ignore
      $contentsWrapper.innerHTML = `<ul class="dc__list">
      ${data.store.map(({id, name, type, thumbnail, coupon, info: { rating, delivery, distance} }) => `<li class="dc__list__item restCard">
          <div class="imgContainer">
            <img src="${thumbnail}" alt="던킨도너츠" />
          </div>
          <div class="descContainer">
            <h3 class="restName">
              <a href="/views/store.html?storeId=${data.id}&detailId=${id}" class="restLink">${name}</a>
            </h3>
            <div class="descContainer__rating">
              <p class="sr-only">별점</p>
              <p class="descContainer__rating__num">${rating}</p>
            </div>
            <dl>
              <div class="descWrapper">
                <dt class="minPrice">최소주문</dt>
                <dd>${delivery.limit}원</dd>
              </div>
              <div class="descWrapper">
                <dt class="dilvTip">배달팁</dt>
                <dd>${delivery.tips[0]}원~${delivery.tips[0]}원<span class="sr-only">거리</span><span class="middot">&middot;</span>${distance}km</dd>
              </div>
              ${type === 'normal' && coupon.length > 0 ? `<div class="couponWrapper">
                  <dt class="sr-only">추가사항</dt>
                  <dd>쿠폰<span class="sr-only">적용 가능</span></dd>
                </div>`: ''}
              ${type ==='no1' ? `<div class="bmNo1wrapper">
                <dt class="bmNo1wrapper__no1">배민</dt>
                <dd>10~20분</dd>
              </div>`: ''}
              </dl>
          </div>
        </li>`).join('')}
      </ul>`
    }
  } catch (e) {
    console.error(e);
  }
};

getStore();
