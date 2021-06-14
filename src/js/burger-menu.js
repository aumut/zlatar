
(function () {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.nav-wrap');

    if (burger) {
        burger.addEventListener('click', e => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            const body = document.body;
            body.classList.toggle('lock');
        });
    }
})();