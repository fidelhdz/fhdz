window.addEventListener('load', () => {
    const elOverlay = document.querySelector('#preloading-page');
    elOverlay.classList.add('good-bye');

    elOverlay.addEventListener('animationend', () => {
        if ( elOverlay.classList.contains('good-bye') ){
            elOverlay.remove();
        }
    });
});

const lenis = new Lenis();

lenis.on('scroll', (e) => {});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

(() => {
    AOS.init({
        duration: 2000,
        ease: 'ease-in-out',
        offset: 100
    });

    const menuIcon = document.querySelector(`.menu-icon`);
    const megaMenu = document.querySelector(`#mega-menu`);
    const theLogo = document.querySelector(`.logo`);

    menuIcon.addEventListener(`click`, () => {
        if ( megaMenu.classList.contains(`visible`) ){
            megaMenu.style.animation = `megaMenuOutAnimation forwards 1000ms ease-in-out`;
            megaMenu.addEventListener(`animationend`, () => {
                menuIcon.classList.remove(`icon-close`);
                theLogo.style.opacity = '1';
                megaMenu.classList.remove(`visible`);
                megaMenu.removeAttribute(`style`);
            }, {once: true});
        } else {
            megaMenu.classList.add(`visible`);
            menuIcon.classList.add(`icon-close`);
            theLogo.style.opacity = '0';
        }
    });

    const elMenu = document.querySelector('header');
    const elCambiante = document.querySelector('.change-menu-color');

    elMenu.classList.add(`change-color`);
    window.addEventListener('scroll', () => {
        const rect1 = elMenu.getBoundingClientRect();
        const rect2 = elCambiante.getBoundingClientRect();

        if ( rect2.y > 0 ){
            elMenu.classList.add(`change-color`);
        } else {
            if ( rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y ) {
                elMenu.classList.add('change-color');
            } else {
                elMenu.classList.remove(`change-color`);
            }
        }
    });
})();