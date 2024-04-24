document.addEventListener("DOMContentLoaded", function() {
    let track = document.querySelector('.slide-track');
    let btnPrev = document.querySelector('.prev');
    let btnNext = document.querySelector('.next');
    let currentIndex = 0;
    let slideWidth = 200; // This should match the .slide min-width
    let slideMargin = 10; // Adjust if you have a margin between slides
  
    btnPrev.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = 'translateX(' + (-slideWidth * currentIndex - (slideMargin * currentIndex)) + 'px)';
      }
    });
  
    btnNext.addEventListener('click', function() {
      if (currentIndex < (track.children.length - 1)) {
        currentIndex++;
        track.style.transform = 'translateX(' + (-slideWidth * currentIndex - (slideMargin * currentIndex)) + 'px)';
      }
    });
  });
  