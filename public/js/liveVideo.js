const liveVideo = () => {
  const $wrapper = document.querySelector('.live__video__wrapper');
  const $liveVideoContainer = document.querySelector('.live__video__container');
  const [$playBtn, $controllerPlayBtn] = document.querySelectorAll('.live__play__btn');
  const $mutedBtn = document.querySelector('.live__muted__btn');
  const $closeBtn = document.querySelector('.live__video__close--btn');
  const $video = document.querySelector('video');
  const $progress = document.querySelector('[role="progressbar"]');
  const $progressBar = document.querySelector('.progress__bar');
  const $timer = document.querySelector('.timer');
  const $allTimer = document.querySelector('.all__timer');
  const $controllerBtns = document.querySelector('.live__video__controller--btn--group');
  const $chatContainer = document.querySelector('.live__video__chatting');
  const $likeBtn = document.querySelector('.like__btn');
  const $likeNum = document.querySelector('.like__num');

  let setTimer;
  const chats = [
    ['배민123', '맛있겠다'],
    ['pizzang', '피자 먹고 싶다.'],
    ['ajdi', '사죠'],
    ['닉네임이뭘까', '댓글을 열심히 써본다'],
    ['어령ㄴ123', '길게 써보기이이이이이이'],
    ['배민123', '맛있겠다'],
    ['frontend-d', '댓글댓글댓글'],
    ['zerobase', '사죠'],
    ['pizzang', '야식으로 먹어야지'],
    ['ajdi', '피자 상품권 구매해서 하나 사먹고 싶다 나도 먹고 싶다 언제 먹을 수 있나'],
  ];

  // 비디오 음소거 / 해제
  const setMuted = ({ target }) => {
    const ariaPressed = target.getAttribute('aria-pressed');

    $video.muted = !$video.muted;
    $mutedBtn.classList.toggle('muted');
    target.setAttribute('aria-label', ariaPressed ? '음소거 해제' : '음소거');
    target.setAttribute('aria-pressed', !ariaPressed);
  };

  // chatting
  const addChat = () => {
    for (let i = 0; i < chats.length; i++) {
      const [chatId, content] = chats[i];
      setTimeout(() => {
        const pTag = document.createElement('p');
        pTag.classList.add('chat');
        pTag.innerHTML = `<b>${chatId}:</b><span>${content}</span>`;
        $chatContainer.append(pTag);
      }, 1000 * i);
    }
  };

  const setProgress = (videoDuration, videoCurrentTime) => {
    $progress.setAttribute('aria-valuetext', `${videoDuration}초 중 ${videoCurrentTime}초 재생 중`);
    $progressBar.style.width = Math.round((videoCurrentTime / videoDuration) * 100) + '%';
    $timer.innerHTML = '00:' + (videoCurrentTime < 10 ? '0' + videoCurrentTime : videoCurrentTime);
  };

  const initVideo = () => {
    const videoDuration = Math.round($video.duration);

    $progress.setAttribute('aria-valuemax', videoDuration);
    $allTimer.textContent = `00:${videoDuration}`;
    setProgress(videoDuration, $video.currentTime);

    $wrapper.classList.remove('loading');
  };

  // 비디오 중지
  const pauseVideo = () => {
    $liveVideoContainer.classList.remove('play');
    $video.pause();
    clearInterval(setTimer);
  };

  // 비디오 재생
  const playVideo = () => {
    $video.play();

    $liveVideoContainer.classList.add('play');
    const ariaPressed = $controllerPlayBtn.getAttribute('aria-pressed') === 'true';
    $controllerPlayBtn.setAttribute('aria-label', ariaPressed ? '중지' : '재생');
    $controllerPlayBtn.setAttribute('aria-pressed', !ariaPressed);

    if (ariaPressed) pauseVideo();
  };

  // 프로그래스 바
  const progressLoop = () => {
    setTimer = setInterval(() => {
      const videoDuration = Math.round($video.duration);
      const videoCurrentTime = Math.round($video.currentTime);
      setProgress(videoDuration, videoCurrentTime);
    }, 1000);

    addChat();
  };

  // 되감기
  const rewind = ({ target }) => {
    const videoDuration = Math.round($video.duration);
    let videoCurrentTime = Math.round($video.currentTime);

    videoCurrentTime += target.className.includes('forward') ? -3 : 3;
    videoCurrentTime = videoCurrentTime < 0 ? 0 : videoCurrentTime >= videoDuration ? videoDuration : videoCurrentTime;
    $video.currentTime = videoCurrentTime;

    setProgress(videoDuration, videoCurrentTime);
  };

  // tabIndex 이동
  const setTabindex = e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;

    const target =
      e.key === 'ArrowRight' ? e.target.parentNode.nextElementSibling : e.target.parentNode.previousElementSibling;

    if (target === null) return;

    e.target.setAttribute('tabindex', -1);
    target.querySelector('button').focus();
    target.querySelector('button').setAttribute('tabindex', 0);
  };

  document.addEventListener('DOMContentLoaded', () => {
    $video.addEventListener('loadedmetadata', initVideo);
    $video.addEventListener('play', progressLoop);
    $video.addEventListener('ended', pauseVideo);

    $closeBtn.addEventListener('click', () => window.history.back());

    $mutedBtn.addEventListener('click', setMuted);
    $playBtn.addEventListener('click', playVideo);
    $controllerBtns.addEventListener('click', e => {
      e.target.classList.contains('rewind__btn') ? rewind(e) : playVideo();
    });
    $controllerBtns.addEventListener('keydown', setTabindex);
    $likeBtn.addEventListener('click', () => {
      $likeNum.textContent = +$likeNum.textContent + 1;
    });
  });
};

liveVideo();
