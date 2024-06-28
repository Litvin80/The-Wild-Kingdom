export function burger() {
    const iconMenu = document.querySelector('.menu__icon');
    if (iconMenu) {
        const menuBody = document.querySelector('.menu__body');
        iconMenu.addEventListener('click', (e) => {
            menuBody.classList.toggle('_active');
            iconMenu.classList.toggle('_active');
            document.body.classList.toggle('_lock');
        });
    }
}