export function headerScrolling() {
  document.addEventListener('DOMContentLoaded', function() {
      const scrollHeader = document.querySelector('.header');
      // Перевірка скролу при завантаженні сторінки
      if (document.documentElement.scrollTop > 0) {
          scrollHeader.classList.add('header-scrolling');
      }

      window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 0) {
          scrollHeader.classList.add('header-scrolling');
        } else {
          scrollHeader.classList.remove('header-scrolling');
        }
      });
  });
}
