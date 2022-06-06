const carousel = ($container, items) => {
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

    let itemCount = currentItem > items.length ? items.length : currentItem;

    $bannerCurrentItem.innerHTML = `${itemCount} / ${items.length} `;
  };

  document.addEventListener("DOMContentLoaded", () => {
    $container.innerHTML = `
<div class="banner__event__list carousel__list">
  ${[items[items.length - 1], ...items, items[0]]
    .map(
      (item) => `
      <article class="banner__event__tabpanel carousel__item" role="tabpanel" aria-label="${item.index}번째 배너">
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
<button class="banner__event__button carousel__list-button prev ">
  <img class="carousel__list-button" src="/images/components/banner/white-arrow56.png" alt="이전 배너 보기 버튼" />
</button>
<button class="banner__event__button carousel__list-button next">
  <img class="carousel__list-button" src="/images/components/banner/white-arrow56.png" alt="다음 배너 보기 버튼" />
</button>
<a href="#" type="button" class="banner__event__link__button"
  ><span class="banner__event__link__button__current"> </span
  >모두보기</a> 
`;

    $carouselList = document.querySelector(".carousel__list");
    $bannerCurrentItem = document.querySelector(
      ".banner__event__link__button__current"
    );
  });

  window.onload = () => {
    $container.style.opacity = 1;

    move(++currentItem);

    // Autoplay
    timerId = setInterval(() => move(++currentItem, DURATION), 5000);
  };

  $container.onclick = ({ target }) => {
    console.log(target);
    if (!target.classList.contains("carousel__list-button") || isMoving) return;

    // Autoplay reset
    clearInterval(timerId);

    const point = target.classList.contains("prev") ? -1 : 1;
    currentItem += 1 * point;
    move(currentItem, DURATION);

    console.log();

    // Autoplay restart
    timerId = setInterval(() => move(++currentItem, DURATION), 5000);
  };

  $container.ontransitionend = () => {
    isMoving = false;

    const point =
      currentItem === 0 ? 1 : currentItem === items.length + 1 ? -1 : 0;

    if (!point) return;

    currentItem += items.length * point;
    move(currentItem);
  };
};

carousel(document.querySelector(".carousel"), [
  {
    index: 1,
    text: "당신의 먹스타일을 알려드릴게요",
    textBold1: "textBold1",
    textBold2: "textBold2",
    img: "/images/components/banner/banner4.png",
  },
  {
    index: 2,
    text: "당신의 먹스타일을 알려드릴게요",
    textBold1: "textBold3",
    textBold2: "textBold4",
    img: "/images/components/banner/banner4.png",
  },
  {
    index: 3,
    text: "당신의 먹스타일을 알려드릴게요",
    textBold1: "textBold5",
    textBold2: "textBold6",
    img: "/images/components/banner/banner4.png",
  },
  {
    index: 4,
    text: "당신의 먹스타일을 알려드릴게요",
    textBold1: "textBold7",
    textBold2: "textBold8",
    img: "/images/components/banner/banner4.png",
  },
]);
