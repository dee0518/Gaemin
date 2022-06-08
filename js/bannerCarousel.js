const bannerCarousel = ($bannerCarousel, items) => {
  let currentItem = 0;
  let isMoving = false;
  const DURATION = 500;

  let timerId = null;
  let $carouselList = null;
  let $bannerCurrentItem = null;

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

    $bannerCurrentItem.innerHTML = `${itemCount} / ${items.length} `;
  };

  document.addEventListener("DOMContentLoaded", () => {
    $bannerCarousel.innerHTML = `
    <h2 class="main__heading banner__event__title sr-only">
          지금 진행 중인 이벤트
        </h2>
<div class="banner__event__list banner__carousel__list">
  ${[items[items.length - 1], ...items, items[0], items[1]]
        .map(
          (item) => `
      <article class="banner__event__tabpanel banner__carousel__item ${item.styleClass}" role="tabpanel" aria-label="${item.index}번째 배너">
        <a href="#" class="banner__event__link">
        <img src="${item.img}" alt="" />
        <p class="banner__event__text">${item.text}</p>
        <p class="banner__event__text-bold">${item.textBold1}</p>
        <p class="banner__event__text-bold">${item.textBold2}</p>
        </a>
        </article>
        `
        )
        .join("")}
</div>
<button class="banner__event__button carousel__list__button prev ">
  <img class="banner__carousel__list-button carousel__list__button prev" src="/images/components/banner/white-arrow56.png" alt="이전 배너 보기 버튼" />
</button>
<button class="banner__event__button carousel__list__button next">
<img class="banner__carousel__list-button carousel__list__button" src="/images/components/banner/white-arrow56.png" alt="다음 배너 보기 버튼" />  
</button>
<a href="#" type="button" class="banner__event__link__button carousel__currnet__badge"
  ><span class="banner__event__link__button__current carousel__currnet__badge__text"> </span
  >모두보기</a> 
`;

    $carouselList = document.querySelector(".banner__carousel__list");
    $bannerCurrentItem = document.querySelector(
      ".banner__event__link__button__current"
    );

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

bannerCarousel(document.querySelector(".banner__carousel"), [
  {
    index: 1,
    text: "당신의 먹스타일을 알려드릴게요",
    textBold1: "textBold1",
    textBold2: "textBold2",
    img: "/images/components/banner/eventChicken.png",
    styleClass: "card__green",
  },
  {
    index: 2,
    text: "당신의 먹스타일을 알려드릴게요",
    textBold1: "textBold3",
    textBold2: "textBold4",
    img: "/images/components/banner/eventChicken.png",
    styleClass: "card__pink",
  },
  {
    index: 3,
    text: "당신의 먹스타일을 알려드릴게요",
    textBold1: "textBold5",
    textBold2: "textBold6",
    img: "/images/components/banner/banner4.png",
    styleClass: "card__darkgreen",
  },
  {
    index: 4,
    text: "당신의 먹스타일을 알려드릴게요",
    textBold1: "textBold7",
    textBold2: "textBold8",
    img: "/images/components/banner/banner4.png",
    styleClass: "card__orange",
  },
]);
