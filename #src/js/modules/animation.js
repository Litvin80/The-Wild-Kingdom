export function initAnimation() {
    const animItems = document.querySelectorAll('._anim-items');
  
    if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll() {
        animItems.forEach(animItem => {
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;
  
          let animItemPoint = window.innerHeight - animItemHeight / animStart;
          if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }
  
          if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
          }
          else {
            if (animItem.classList.contains('_anim-hide')) {
              animItem.classList.remove('_active'); // для повторної анімації
            }
          }
        });
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft = window.scrollX || document.documentElement.scrollLeft,
          scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
        animOnScroll();
      }, 400);
    }
  }
  