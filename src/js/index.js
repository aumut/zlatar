
(function () {
    const left_side = document.querySelector('.left-side');
    const content = document.querySelector('.content');
    if(left_side) {
        const menu = document.querySelector('.menu');
        const links = menu.querySelectorAll('.menu-item');
        links.forEach(link => link.addEventListener('click', e => {
            e.stopPropagation();

            const menuActiveItems = menu.querySelectorAll('.active.menu-item');
            menuActiveItems.forEach(item => item.classList.remove('active'));

            const menuType = link.dataset.menutype;
            //console.log(menuType);
            if (!left_side.classList.contains(menuType)) {
                const classList = left_side.classList.value;
                //str.match(/menu-\w*/g)
                const menuClass = classList.match(/m-\w*/g);

                if (menuClass) menuClass.forEach(cl => {
                    left_side.classList.remove(cl);
                    content.classList.remove(cl);
                });

                if (menuType) {
                    left_side.classList.add(menuType);
                    content.classList.add(menuType);
                }
            }

            link.classList.add('active');

            const itemParent = link.parentNode;
            if (itemParent && itemParent.classList.contains('submenu')) {
                itemParent.closest('.menu-item').classList.add('active');
            }
        }));
    }

    function foldMenu() {
        const windowInnerHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        if (windowInnerHeight <= 900) {
            const servicesLi = document.querySelector('.services');
            const productsLi = document.querySelector('.products');
        }
    }

    function content_in_mt() {
        const content_in_about = document.querySelector('.content-about .content-in');
        if (content_in_about) {
            let content_in_about_h = content_in_about.clientHeight;
            content_in_about.style.marginTop = content_in_about_h / (-2) + "px";
        }
    }

    //setTimeout(() => content_in_mt(), 100);

    $(window).resize(function() {
        //content_in_mt();
    });

    //скрыть\показать модальное окно
    const body = document.body;
    const modal = document.querySelector('.modal');
    const show_modal = document.querySelector('.show-modal');
    const hide_modal = document.querySelector('.hide-modal');

    //при клике на кнопку "show-modal", показать модальное окно
    if(show_modal) {
        show_modal.addEventListener('click', e => {
            e.stopPropagation();
            modal.classList.add('active');
            body.classList.add("modal-bg");
        });
    }

    //при клике на кнопку "hide-modal", скрыть модальное окно
    if(hide_modal) {
        hide_modal.addEventListener('click', e => {
            e.stopPropagation();
            if (modal.classList.contains('modal-catalog-phone')) return false;
            modal.classList.remove('active');
            body.classList.remove("modal-bg");
        });
    }

    //скрыть модальное окно при клике вне блока модального окна
    document.addEventListener('click', function(e) {
        if (!modal) return;
        if (modal.classList.contains('modal-catalog-phone')) return false;
        const target = e.target;
        const its_modal = target == modal || modal.contains(target);
        const its_btnSend = target == hide_modal;
        const modal_is_active = modal.classList.contains('active');

        if (!its_modal && !its_btnSend && modal_is_active) {
            modal.classList.remove('active');
            body.classList.remove("modal-bg");
        }
    });

})();