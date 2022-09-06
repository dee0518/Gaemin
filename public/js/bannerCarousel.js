const bannerCarousel = (
  $bannerCarousel,
  { title, titleSrOnly, isAllBtn, carousels }
) => {
  let currentItem = 0;
  let isMoving = false;
  const DURATION = 500;

  let timerId = null;
  let $carouselList = null;
  let $carouselItem = null;
  let $bannerCurrentItem = null;

  // currentItem를 기준으로 carouselList를 이동시킨다.
  const move = (currentItem, duration = 0) => {
    if (duration) isMoving = true;

    $carouselList.style.setProperty("--duration", duration);
    $carouselList.style.setProperty("--currentItem", currentItem);
    $carouselList.setAttribute("aria-live", "off");

    let itemCount =
      currentItem <= 0
        ? 1
        : currentItem > items.length
        ? items.length
        : currentItem;
    $carouselList.setAttribute("aria-live", "polite");
    $bannerCurrentItem.innerHTML = `${itemCount} / ${items.length} `;
  };

  document.addEventListener("DOMContentLoaded", () => {
    // prettier-ignore
    $bannerCarousel.innerHTML = `
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

    $carouselList = document.querySelector(".banner__carousel__list");
    $carouselItem = document.querySelectorAll(".banner__carousel__item");
    $bannerCurrentItem = document.querySelector(".banner__container__currnet");

    $bannerCarousel.style.opacity = 1;
    move(++currentItem);

    // Autoplay
    timerId = setInterval(() => move(++currentItem, DURATION), 5000);
  });

  // window.onload = () => {
  // };

  $bannerCarousel.onclick = ({ target }) => {
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

  $bannerCarousel.ontransitionend = () => {
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

const mainCarousel = {
  title: "지금 진행 중인 이벤트",
  titleSrOnly: true,
  carousels: [
    {
      id: 1,
      title: "<span>이제는</span><span>웹에서도 만나요!</span>",
      subTitle: "친구초대시 5천원 쿠폰",
      contents: "",
      img: "",
      background: "/assets/images/components/banner/banner1.png",
      styleClass: "card__green",
    },
    {
      id: 2,
      title: "<span>인생은</span><span>치킨의 연속</span>",
      subTitle: "뭐 먹을지 고민될땐",
      contents: "",
      img: "",
      background: "/assets/images/components/banner/banner2.png",
      styleClass: "card__pink",
    },
    {
      id: 3,
      title: "<span>든든한 보양식~</span><span>먹고싶을 때</span>",
      subTitle: "무더운 여름철",
      contents: "",
      img: "",
      background: "/assets/images/components/banner/banner3.png",
      styleClass: "card__orange",
    },
    {
      id: 4,
      title: "<span>할인과 결제사이</span><span>단 10초!</span>",
      subTitle: "쿠폰함을 확인해 보세요",
      contents: "",
      img: "",
      background: "/assets/images/components/banner/banner4.png",
      styleClass: "card__darkgreen",
    },
  ],
};

bannerCarousel(document.querySelector(".banner__container"), mainCarousel);
