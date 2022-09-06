const todayDiscountCarousel = (
  $todayDiscountCarousel,
  { title, titleSrOnly, isAllBtn, carousels }
) => {
  let currentItem = 0;
  let isMoving = false;
  const DURATION = 500;

  let timerId = null;
  let $carouselList = null;
  let $todayDiscountCurrentItem = null;

  // currentItem를 기준으로 carouselList를 이동시킨다.
  const move = (currentItem, duration = 0) => {
    if (duration) isMoving = true;

    $carouselList.style.setProperty("--duration", duration);
    $carouselList.style.setProperty("--currentItem", currentItem);

    let itemCount =
      currentItem <= 0
        ? 1
        : currentItem > items.length
        ? items.length
        : currentItem;

    $todayDiscountCurrentItem.innerHTML = `${itemCount} / ${items.length} `;
  };

  document.addEventListener("DOMContentLoaded", () => {
    // prettier-ignore
    $todayDiscountCarousel.innerHTML = `
    <h2 class="banner__container__title ${ titleSrOnly ? 'sr-only' : '' }">${title}</h2>
    ${isAllBtn ? '<a href="#" class="main__all__link">전체보기</a>' : ''}
    <div class="banner__container__carousel">
      <div class="banner__container__control__buttons">
        <button class="banner__container__control__buttons__prev">
          <img src="/assets/images/components/banner/white-arrow.png" alt="이전 배너 보기 버튼" />
        </button>
        <button class="banner__container__control__buttons__next">
          <img src="/assets/images/components/banner/white-arrow.png" alt="다음 배너 보기 버튼" />
        </button>
      </div>
      <ul class="banner__container__list">
        ${[carousels.at(-1), ...carousels, carousels.at(0)]
          .map(({ id, title, subTitle, contents, styleClass, img, background }) => `
            <li class="banner__container__list__item ${styleClass}" role="tabpanel" aria-label="${id}번째 배너">
              <a href="#" class="banner__container__list__item__link">
                ${img !== ''? `<img src="${img}" alt="" class="banner__container__list__item__link__logo" />` : ''}
                ${background !== ''? `<img src="${background}" alt="" class="banner__container__list__item__link__bg" />`: ''}
                <p class="banner__container__list__item__subTitle">${subTitle}</p>
                <p class="banner__container__list__item__title">${title}</p> 
                ${contents.length > 0 ? `<p class="banner__container__list__item__content">${contents}</p>`: ''}
              </a>
            </li>`).join('')}
      </ul>
      <button class="banner__container__current" aria-hidden="true">
        <span class="banner__container__current__badge__text"></span> 모두보기
      </button> 
    </div>
`;

    $carouselList = document.querySelector(".today__discount__carousel__list");
    $todayDiscountCurrentItem = document.querySelector(
      ".today_discount__link__button__current"
    );

    $todayDiscountCarousel.style.opacity = 1;

    move(++currentItem);

    // Autoplay
    timerId = setInterval(() => move(++currentItem, DURATION), 5000);
  });

  $todayDiscountCarousel.onclick = ({ target }) => {
    console.log(target);
    if (!target.classList.contains("carousel__list__button") || isMoving)
      return;

    // Autoplay reset
    clearInterval(timerId);

    const point = target.classList.contains("prev") ? -1 : 1;
    currentItem += 1 * point;
    move(currentItem, DURATION);

    console.log();

    // Autoplay restart
    timerId = setInterval(() => move(++currentItem, DURATION), 5000);
  };

  $todayDiscountCarousel.ontransitionend = () => {
    isMoving = false;

    const point =
      currentItem === 0 ? 1 : currentItem === items.length + 1 ? -1 : 0;

    if (!point) return;

    currentItem += items.length * point;
    move(currentItem);
  };
};

/**
 * DATA SET
 * */
const todayCarousel = {
  title: "오늘의 할인",
  titleSrOnly: false,
  isAllBtn: true,
  carousels: [
    {
      id: 1,
      subTitle: "6월 생일 이벤트",
      title: "선착순 무료",
      contents:
        "<span>콩~그레이츄레이션</span><span>당신의 생일을 축하합니다</span>",
      img: "/assets/images/components/banner/logo_dunkin.webp",
      background: "/assets/images/components/banner/birthday.png",
      styleClass: "card__skin",
    },
    {
      id: 2,
      subTitle: "마루가메 우동 전메뉴",
      title: "4천원 할인",
      contents:
        "<span>오키나와 스타일 우동 전문 브렌드!</span><span>올 여름 오키나와를 느껴보세요</span>",
      img: "/assets/images/components/banner/logo_udon.webp",
      background: "/assets/images/components/banner/udon.png",
      styleClass: "card__purple",
    },
    {
      id: 3,
      subTitle: "보울 메뉴",
      title: "1만원 할인",
      contents:
        "<span>붐 치키 붐~ 든든하고 맛있게</span><span>리얼 멕시코를 두배 사이즈로</span>",
      img: "/assets/images/components/banner/logo_carolinas.png",
      background: "/assets/images/components/banner/mexican.png",
      styleClass: "card__pairgreen",
    },
    {
      id: 4,
      subTitle: "둔내 막국수",
      title: "2천원 할인",
      contents: "<span>쫄깃한 면발</span><span>여름에 입맛돋구는 막국수</span>",
      img: "/assets/images/components/banner/logo_vips.png",
      background: "/assets/images/components/banner/vips-bg.png",
      styleClass: "card__yellow",
    },
  ],
};
todayDiscountCarousel(
  document.querySelector(".today__discount__carousel"),
  todayCarousel
);
