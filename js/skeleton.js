const loadingItem = document.querySelectorAll('.loading');
// 로딩 요소, 표시하지 않기
const hideLoading = () => {
  loadingItem.forEach(element => {
    element.classList.add('loading-hidden');
  });
}
// 테스트 코드
window.onload = hideLoading;
