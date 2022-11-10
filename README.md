# 🚛 개발의 민족(Gaemin)
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/-SCSS-CC6699?style=flat&logo=sass&logoColor=white"> 
  <img src="https://img.shields.io/badge/-Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white">

<br>

## 1. Outline
개발의 민족은 배달의 민족 웹 어플리케이션이다. 다양한 사용자 층에 비해 모바일 환경(모바일 UI)에서만 이용 가능한 서비스를 **다양한 디바이스에서 접근할 수 있도록 태블릿부터 피씨까지의 반응형 웹 서비스**로 작업했다. 또한 배달의 민족 앱은 가로 모드나 확대 등의 WCAG 2.1 기준 1레벨 항목들조차 지키지지 않았고 이에 **웹 접근성에 초점**을 맞추어 진행했다. 총 5명의 FE로 구성된 팀 프로젝트이며 총 9개의 페이지를 제작했다. 구현된 기능은 아래와 같다.
- Carousel
- Modal
- go to top 버튼
- tab관련 웹 접근성
- localStorage를 이용한 장바구니 뱃지 표시
- 비디오 컨트롤
- Map API
- Skeleton UI
- 링크 : [개발의 민족](https://bubobubobo.github.io/Gaemin/main.html)

<br>

## 2. Contribution
- 비디오 컨트롤 및 채팅창: [public/js/liveVideo.js](./public/js/liveVideo.js)
- 쇼핑 라이브 UI 및 기능 : [public/js/liveShopping.js](./public/js/liveShopping.js)
- 주문 페이지 UI 및 기능 : [public/js/orderDetail.js](./public/js/orderDetail.js)
- 작업한 웹 접근성 <br>
   1. 비디오 음소거 / 해제<br>
      - 어떤 버튼인지, 버튼이 눌려진 여부를 알려준다.
   2. 프로그래스 바 <br>
      - 비디오의 전체 시간과 현재 재생되고 있는 시간을 알려준다.
   3. Tab키로 비디오 컨트롤 focus되는 부분을 설정<br>
      - 3개 버튼의 tab-index가 [-1, 0, -1]로 설정
      - tab-index가 0인 곳에 focus되고 화살표키를 이용하여 -1로 이동하여 0으로 설정
      - 기존의 [-1, 0, -1]에서 [0, -1, -1]이 됨
      - 다시 Tab키로 이동했을 때 focus되는 것은 1번째 버튼이 됨
```javascript
  // liveVideo.js
  
  // i. 비디오 음소거 / 해제
  const setMuted = ({ target }) => {
    const ariaPressed = target.getAttribute('aria-pressed');

    $video.muted = !$video.muted;
    $mutedBtn.classList.toggle('muted');
    
    // 어떤 버튼인지 알려준다.
    target.setAttribute('aria-label', ariaPressed ? '음소거 해제' : '음소거');
    
    // 버튼이 눌려있는 여부를 알려준다.
    target.setAttribute('aria-pressed', !ariaPressed);
  };
  
  // ii. 프로그래스 바
  const setProgress = (videoDuration, videoCurrentTime) => {
    // 비디오의 전체 시간과 현재 재생되고 있는 시간을 알려준다.
    $progress.setAttribute('aria-valuetext', `${videoDuration}초 중 ${videoCurrentTime}초 재생 중`);
    $progressBar.style.width = Math.round((videoCurrentTime / videoDuration) * 100) + '%';
    $timer.innerHTML = '00:' + (videoCurrentTime < 10 ? '0' + videoCurrentTime : videoCurrentTime);
  };
  
  // iii. Tab키로 비디오 컨트롤 focus되는 부분을 설정해준다.
  const setTabindex = e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;

    const target =
      e.key === 'ArrowRight' ? e.target.parentNode.nextElementSibling : e.target.parentNode.previousElementSibling;

    if (target === null) return;

    e.target.setAttribute('tabindex', -1);
    target.querySelector('button').focus();
    target.querySelector('button').setAttribute('tabindex', 0);
  };
```

<br>

## 3. Issue & Slove Problem
1. [liveShopping] 영상 x축 슬라이드를 구현하는 과정에서 버벅이는 오류.
- 원인 : 마우스 드래그 이벤트 시점이 잘못 잡혀있다고 추측.
- 해결 : 끝내 오류 원인을 정확히 파악하지 못하여 해결하지 못했다. mouse event에 대해서 더 공부를 해보며 원인을 파악해야겠다.

2. [liveVideo] 임의 데이터로 채팅창 구현 중 해당 데이터의 갯수만큼 나오지 않는 오류.
- 원인 : 데이터를 객체로 구성하면서 같은 키에 다른 값을 가진 목록을 추가하여 값이 덮어씌어지는 객체의 성질로 인한 문제
- 해결 : 데이터를 배열로 구성하여 온전히 모든 데이터를 유지할 수 있도록 하였다.

```javascript
// 변경 전
const chats = {
  '배민123': '맛있겠다',
  'pizzang': '피자 먹고 싶다.',
  'ajdi': '사죠',
  '배민123': '맛있게 잘먹겠습니다.' // 첫번째로 있는 '배민123'의 값을 
};
```

```javascript
// 변경 후
const chats = [
    ['배민123', '맛있겠다'],
    ['pizzang', '피자 먹고 싶다.'],
    ['ajdi', '사죠'],
    ['배민123', '맛있겠다'],
 ];
```
<br>

## 4. 팀 작업 이후...
팀 작업 이후에 자바스크립트에 대한 지식이 강화되어 이를 적용하고자 사용자 UI를 다듬고 기능을 추가하는 리뉴얼 작업을 진행 중이다. <br>
추가한 기능은 아래와 같다.
- 넓은 범위의 반응형 적용 및 UI 수정.
- Mock server와의 데이터 연결.
- 현재 Mock Server의 데이터가 제대로 출력되지 않아 해결 중에 있다. 
- 링크 : [리뉴얼_개발의 민족](https://gaemin.vercel.app/)
