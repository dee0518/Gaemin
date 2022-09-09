/* eslint-disable import/extensions */
import footer from './footer.js';
import header from './header.js';
import bannerCarousel from './bannerCarousel.js';

/* DATA SET */
const mainCarousel = [
  {
    id: 1,
    title: '<span>이제는</span><span>웹에서도 만나요!</span>',
    subTitle: '친구초대시 5천원 쿠폰',
    contents: '',
    img: '',
    background: '/assets/images/components/banner/banner1.png',
    styleClass: 'card__green',
  },
  {
    id: 2,
    title: '<span>인생은</span><span>치킨의 연속</span>',
    subTitle: '뭐 먹을지 고민될땐',
    contents: '',
    img: '',
    background: '/assets/images/components/banner/banner2.png',
    styleClass: 'card__pink',
  },
  {
    id: 3,
    title: '<span>든든한 보양식~</span><span>먹고싶을 때</span>',
    subTitle: '무더운 여름철',
    contents: '',
    img: '',
    background: '/assets/images/components/banner/banner3.png',
    styleClass: 'card__orange',
  },
  {
    id: 4,
    title: '<span>할인과 결제사이</span><span>단 10초!</span>',
    subTitle: '쿠폰함을 확인해 보세요',
    contents: '',
    img: '',
    background: '/assets/images/components/banner/banner4.png',
    styleClass: 'card__darkgreen',
  },
];

const todayCarousel = [
  {
    id: 1,
    subTitle: '6월 생일 이벤트',
    title: '선착순 무료',
    contents: '<span>콩~그레이츄레이션</span><span>당신의 생일을 축하합니다</span>',
    img: '/assets/images/components/banner/logo_dunkin.webp',
    background: '/assets/images/components/banner/birthday.png',
    styleClass: 'card__skin',
  },
  {
    id: 2,
    subTitle: '마루가메 우동 전메뉴',
    title: '4천원 할인',
    contents: '<span>오키나와 스타일 우동 전문 브렌드!</span><span>올 여름 오키나와를 느껴보세요</span>',
    img: '/assets/images/components/banner/logo_udon.webp',
    background: '/assets/images/components/banner/udon.png',
    styleClass: 'card__purple',
  },
  {
    id: 3,
    subTitle: '보울 메뉴',
    title: '1만원 할인',
    contents: '<span>붐 치키 붐~ 든든하고 맛있게</span><span>리얼 멕시코를 두배 사이즈로</span>',
    img: '/assets/images/components/banner/logo_carolinas.png',
    background: '/assets/images/components/banner/mexican.png',
    styleClass: 'card__pairgreen',
  },
  {
    id: 4,
    subTitle: '둔내 막국수',
    title: '2천원 할인',
    contents: '<span>쫄깃한 면발</span><span>여름에 입맛돋구는 막국수</span>',
    img: '/assets/images/components/banner/logo_vips.png',
    background: '/assets/images/components/banner/vips-bg.png',
    styleClass: 'card__yellow',
  },
];

header();
footer();
bannerCarousel(
  document.querySelector('.main__banner'),
  {
    title: '지금 진행 중인 이벤트',
    titleSrOnly: true,
    isAllBtn: false,
    carousels: [mainCarousel.at(-1), ...mainCarousel, mainCarousel.at(0)],
    length: 4,
  },
  2000
);
bannerCarousel(
  document.querySelector('.today__discount__carousel'),
  {
    title: '오늘의 할인',
    titleSrOnly: false,
    isAllBtn: true,
    carousels: [todayCarousel.at(-1), ...todayCarousel, todayCarousel.at(0), todayCarousel.at(1), todayCarousel.at(2)],
    length: 4,
  },
  1500
);
