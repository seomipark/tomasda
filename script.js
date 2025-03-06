// 슬라이드 애니메이션 및 스크롤 네비게이션 기능
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      const index = Array.from(slides).indexOf(entry.target);
      updateDots(index);
    }
  });
}, {
  threshold: 0.3
});

// 모든 슬라이드 감지
slides.forEach(slide => slideObserver.observe(slide));

// 네비게이션 Dot 업데이트
function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Dot 클릭 시 해당 슬라이드로 이동
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides[index].scrollIntoView({ behavior: 'smooth' });
  });
});
