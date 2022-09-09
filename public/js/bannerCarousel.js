const bannerCarousel = ($bannerCarousel, { title, titleSrOnly, isAllBtn, carousels, length }, duration) => {
  let currentItem = 0;
  let isMoving = false;
  const DURATION = duration;

  let timerId = null;
  let $carouselList = null;
  let $bannerCurrentItem = null;

  // currentItem를 기준으로 carouselList를 이동시킨다.
  const move = (currentItem, duration = 0) => {
    if (duration !== 0) isMoving = true;

    $carouselList.style.setProperty('--duration', duration);
    $carouselList.style.setProperty('--currentItem', currentItem);
    $carouselList.setAttribute('aria-live', 'polite');
    const itemCount = currentItem === length + 1 ? 1 : currentItem;
    $bannerCurrentItem.innerHTML = `${itemCount} / ${length} `;
  };

  const setAutoplay = () => {
    timerId = setInterval(() => move(++currentItem, DURATION), 5000);
  };

  document.addEventListener('DOMContentLoaded', () => {
    // prettier-ignore
    $bannerCarousel.innerHTML = `
    <h2 class="banner__container__title ${ titleSrOnly ? 'sr-only' : '' }">${title}</h2>
    ${isAllBtn ? '<a href="#" class="main__all__link">전체보기</a>' : ''}
    <div class="banner__container__carousel">
      <div class="banner__container__control__buttons">
        <button class="banner__container__control__buttons__prev prev">
          <img src="/assets/images/components/banner/white-arrow.png" alt="이전 배너 보기 버튼" />
        </button>
        <button class="banner__container__control__buttons__next next">
          <img src="/assets/images/components/banner/white-arrow.png" alt="다음 배너 보기 버튼" />
        </button>
      </div>
      <ul class="banner__container__list">
        ${carousels
          .map(({ id, title, subTitle, contents, styleClass, img, background }) => `
            <li class="banner__container__list__item ${styleClass}" role="tabpanel" aria-label="${id}번째 배너">
              <a href="#" class="banner__container__list__item__link">
                ${img !== ''? `<img src="${img}" alt="" class="banner__container__list__item__link__logo" />` : ''}
                ${background !== ''? `<img src="${background}" alt="" class="banner__container__list__item__link__bg" />`: ''}
                <p class="banner__container__list__item__subTitle">${subTitle}</p>
                <p class="banner__container__list__item__title">${title}</p> 
                ${contents !== '' ? `<p class="banner__container__list__item__content">${contents}</p>`: ''}
              </a>
            </li>`).join('')}
      </ul>
      <button class="banner__container__current" aria-hidden="true">
        <span class="banner__container__current__badge__text"></span> 모두보기
      </button> 
    </div>
`;

    $carouselList = $bannerCarousel.querySelector('.banner__container__list');
    $bannerCurrentItem = $bannerCarousel.querySelector('.banner__container__current__badge__text');

    // prettier-ignore
    $bannerCarousel.querySelector(".banner__container__carousel").style.opacity = 1;

    currentItem += 1;
    move(currentItem);

    // Autoplay
    timerId = setInterval(() => move(++currentItem, DURATION), 5000);
  });

  $bannerCarousel.addEventListener('click', ({ target }) => {
    if (!target.closest('.banner__container__control__buttons') || isMoving) return;

    clearInterval(timerId);
    currentItem += target.classList.contains('prev') ? -1 : 1;
    move(currentItem, DURATION);

    // Autoplay restart
    timerId = setInterval(() => move(++currentItem, DURATION), 5000);
  });

  $bannerCarousel.addEventListener('transitionend', () => {
    isMoving = false;

    const point = currentItem === 0 ? 1 : currentItem === length + 1 ? -1 : 0;

    if (!point) return;

    currentItem += length * point;
    move(currentItem);
  });
};

export default bannerCarousel;
