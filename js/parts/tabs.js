function tabs() {
    [...document.querySelectorAll('.tabs')].forEach((tabs) => {
        var nav = tabs.querySelector('.tabs__nav');
        var content = tabs.querySelector('.tabs__content');

        nav.querySelector('.js-tabs-link')?.classList.add('active');
        content.querySelector('.js-items[data-tabid]')?.classList.add('active');

        [...nav.querySelectorAll('.js-tabs-link:not([disabled])')].forEach((tab) => {
            tab.addEventListener('click', function (e) {
                e.preventDefault();
                if (!tab.classList.contains('active')) {
                    let tabid = tab.getAttribute('data-tabid');

                    nav.querySelector('.js-tabs-link.active')?.classList.remove('active');
                    tab?.classList.add('active');

                    content.querySelector('.js-items.active')?.classList.remove('active');
                    content.querySelector(`.js-items[data-tabid="${tabid}"]`)?.classList.add('active');
                }
            });
        });
    });
}

export { tabs };