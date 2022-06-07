(function(){
  const liveVideoContainer = document.querySelector('.live__video__container');
  const playBtns = document.querySelectorAll('.live__play__btn');
  const mutedBtn = document.querySelector('.live__muted__btn');
  const closeBtn = document.querySelector('.live__video__close--btn');
  const video = document.querySelector('video');
  const progress = document.querySelector('[role="progressbar"]');
  const progressBar = document.querySelector('.progress__bar');
  const timer = document.querySelector('.timer');
  const allTimer = document.querySelector('.all__timer');
  const rewindBtns = document.querySelectorAll('[class*=rewind__]');
  const chatContainer = document.querySelector('.live__video__chatting');
  const chatObject = {
    '배민123': '맛있겠다',
    'pizzang': '피자피자 먹고 싶다.',
    'ajdi': '사죠',
    '닉네임이뭘까': '댓글댓글댓글',
    '어령ㄴ123': '길게 길게 써보기이이이이이이',
    '배민123': '맛있겠다',
    'pizzang': '피자피자 먹고 싶다.',
    'ajdi': '사죠',
    '닉네임이뭘까': '댓글댓글댓글',
    '어령123': '길게 길게 써보기이이이이이이'
  }
  let setTimer;
  
  // 비디오 초기화
  const initVideo = () => {
    const video_du = Math.round(video.duration);
    progress.setAttribute('aria-valuemax', video_du);
    progress.setAttribute('aria-valuetext', `${video_du}초 중 0초`);
    allTimer.innerHTML = '00:' + (video_du > 10? video_du : '0' + video_du);
  }

  // 비디오 음소거
  const mutedVideo = () => {
    video.setAttribute('muted', true);
    mutedBtn.classList.add('muted')
  }
  
  // 비디오 음소거 해제
  const mutedOffVideo = ()=> {
    video.setAttribute('muted', false);
    mutedBtn.classList.remove('muted')
  }

  const funcMuted = (e) => {
    let ariaLabel = e.target.getAttribute('aria-label');

    if(ariaLabel === '음소거'){
      mutedVideo()
      e.target.setAttribute('aria-label', "음소거 해제");
      e.target.setAttribute('aria-pressed', true);
    } else {
      mutedOffVideo()
      e.target.setAttribute('aria-label', "음소거");
      e.target.setAttribute('aria-pressed', false);
    }
  }

  // 비디오 재생
  const playVideo = () => {
    liveVideoContainer.classList.add('play');
    video.play()
    playBtns[1].setAttribute('aria-label', "중지")
    playBtns[1].setAttribute('aria-pressed', true)
  }

  // 비디오 중지
  const pauseVideo = () => {
    liveVideoContainer.classList.remove('play');
    video.pause()
    clearInterval(setTimer)
  }

  const funcVideo = (e, index) => {
    if(index === 1){
      let ariaLabel = e.target.getAttribute('aria-label');

      if(ariaLabel === '중지') {
        e.target.setAttribute('aria-label', "재생")
        e.target.setAttribute('aria-pressed', false)
        pauseVideo()
      } else {
        e.target.setAttribute('aria-pressed', "중지")
        e.target.setAttribute('aria-pressed', true)
        playVideo()
      }
    } else {
      playVideo()
    }
  }
  
  // 프로그래스 바
  const progressLoop = () => {
    setTimer = setInterval(function () {
      let video_du = Math.round(video.duration);
      let video_cur = Math.round(video.currentTime);
      progress.setAttribute('aria-valuetext', `${video_du}초 중 ${video_cur}초 재생 중`);
      progressBar.style.width = Math.round((video_cur / video_du) * 100) + '%';
      timer.innerHTML = '00:' + (video_cur < 10? ('0' + video_cur) : video_cur)
    });

    addChat()
  }

  // 되감기
  const rewind = (e) => {
    let video_du = Math.round(video.duration);
    let video_cur = Math.round(video.currentTime);
    if(e.target.className.includes('forward')){
      if(video_cur > 5 || video_cur < video_du){
        video.currentTime -= 5;
      }
    } else {
      if(video_cur > 0 || video_cur < video_du - 5){
        video.currentTime += 5;
      }
    }

    progress.setAttribute('aria-valuetext', `${video_du}초 중 ${video.currentTime}초 재생 중`);
    progressBar.style.width = Math.round((video.currentTime / video_du) * 100) + '%';
    timer.innerHTML = '00:' + (Math.round(video.currentTime) < 10? ('0' + Math.round(video.currentTime)) : Math.round(video.currentTime))
  }

  // 댓글 추가하기
  let index = 0

  const addChat = () => {
    for (let pro in chatObject) {
      setTimeout(function(){
        const pTag = document.createElement('p');
        pTag.classList.add('chat');
        pTag.innerHTML = `<b>${pro}</b><span>${chatObject[pro]}</span>`;
        
        chatContainer.append(pTag)
      }, 1000*index++);  
    }

    index = 0
  }

  document.addEventListener("DOMContentLoaded", () => {
    playBtns.forEach((playBtn, i) => {
      playBtn.addEventListener('click', (e) => funcVideo(e, i));
    })
    mutedBtn.addEventListener('click', funcMuted);
    closeBtn.addEventListener('click', () => location.href = "./liveShopping.html")
    video.addEventListener('loadedmetadata', initVideo);
    video.addEventListener('play', progressLoop);
    video.addEventListener('ended',pauseVideo);
    rewindBtns.forEach((rewindBtn) => {
      rewindBtn.addEventListener('click', rewind);
    })
  });
})();
