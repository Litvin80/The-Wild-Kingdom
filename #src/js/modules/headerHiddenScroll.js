export function headerHidenScroll() {
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop) {
            // Прокрутка вниз
            document.querySelector("header.header").classList.add("header-hidden");
        } else {
            // Прокрутка вверх
            document.querySelector("header.header").classList.remove("header-hidden");
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}