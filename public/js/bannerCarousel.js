const bannerCarousel = ($bannerCarousel, { title, titleSrOnly, carousels }) => {
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
    <h2 class="main__heading banner__container__title ${titleSrOnly? 'sr-only': ''}">${title}</h2>     
    <div class="banner__container__control__buttons">
      <button class="banner__container__control__buttons__prev" aria-controls="banner__carousel__list">
        <img src="/assets/images/components/banner/white-arrow.png" alt="이전 배너 보기" />
      </button>
      <button class="banner__container__control__buttons__next" aria-controls="banner__carousel__list">
        <img src="/assets/images/components/banner/white-arrow.png" alt="다음 배너 보기" />  
      </button>
    </div>
    <div class="banner__container__list banner__carousel__list" id="banner__carousel__list">
      ${[carousels.at(-1), ...carousels, carousels.at(0)]
        .map(
          ({ title, content, img, styleClass }, i) => `
          <article class="banner__container__list__tabpanel banner__carousel__item ${styleClass}" aria-label="${i}번째 배너" role="group" aria-roledescription="slide">
            <a href="#" class="banner__container__list__tabpanel__link">
              <img src="${img}" alt="배너${i}" />
              <p class="banner__container__list__tabpanel__title">${title}</p>
              <p class="banner__container__list__tabpanel__content">${content}</p>
            </a>
          </article>
          `
        ).join("")}
    </div>
    <button class="banner__container__current" aria-hidden="true">
      <span class="banner__container__current__badge__text"></span> 모두보기
    </button> 
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
      index: 1,
      title: "<span>이제는</span><span>웹에서도 만나요!</span>",
      content: "친구초대시 5천원 쿠폰",
      img: "/assets/images/components/banner/EzU.png",
      styleClass: "card__green",
    },
    {
      index: 2,
      title: "<span>인생은</span><span>치킨의 연속</span>",
      content: "뭐 먹을지 고민될땐",
      img: "/assets/images/components/banner/eventChicken.png",
      styleClass: "card__pink",
    },
    {
      index: 3,
      title: "<span>든든한 보양식~</span><span>먹고싶을 때</span>",
      content: "무더운 여름철",
      img: "/assets/images/components/banner/eelbob.png",
      styleClass: "card__orange",
    },
    {
      index: 4,
      title: "<span>할인과 결제사이</span><span>단 10초!</span>",
      content: "쿠폰함을 확인해 보세요",
      img: "/assets/images/components/banner/banner4.png",
      styleClass: "card__darkgreen",
    },
  ],
};

bannerCarousel(document.querySelector(".banner__container"), mainCarousel);
