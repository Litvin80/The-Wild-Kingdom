/*
Якщо потрібні додаткові модулі слайдера, вказуємо їх {} у через кому, накприклад: {Navigation, Autoplay}
Основні модулі слайдера:
{Navigation, Pagination, Autoplay, EffectFade, Lazy, Manipulation}
*/
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// Ініціалізація слайдерів 
function initSliders() {
    if (document.querySelector('.reviews__slider')) {
        new Swiper('.reviews__slider', {
            // Підключаємо модулі слайдеру для конкретного випадку
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            loop: true,

            touchRatio: 1,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,

            /*
           // Ефекти
           effect: 'fade',
           autoplay: {
            delay: 3000,
            disableOnInteraction: true,
           },
           */


            // Optional parameters
            direction: 'horizontal',
            loop: true,

            /*
            // Пагінація
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            */

            /*
            // Скролбар
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            // Кнопки навігації
            navigation: {
                nextEl: '.reviews__button-next',
                prevEl: '.reviews__button-prev',
            },

            /*
            // Брейкпоінти
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },

            },
            */


            /*
            // Події
            on: {  
            },
            */
            
        })
    }
}
initSliders();