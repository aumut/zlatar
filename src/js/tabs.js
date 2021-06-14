/*class tabs {
    constructor(selector) {
        console.log('!=!=!=!=!', selector);
        this.$el = document.querySelector(selector);
        this.$tabsItems = this.$el.querySelectorAll('.tabs__item');
        this.$tabsItems.forEach(tabsItem => {
            tabsItem.addEventListener('click', e => {
                e.preventDefault();
                const active = this.$el.querySelector('.tabs__item.active');
                if (active === tabsItem) return false;
                active.classList.remove('active');
                tabsItem.classList.add('active');

                const activeTabContent = this.$el.querySelector('.tabs__block.active');
                activeTabContent.classList.remove('active');
                const tabsContentSelector = tabsItem.getAttribute('href');
                const tabsContent = this.$el.querySelector(tabsContentSelector);
                tabsContent.classList.add('active');
            });
        });
    }

};*/

function initTabs(selector) {
    const tabs = document.querySelector(selector);
    const tabsItems = tabs.querySelectorAll('.tabs__item');
    tabsItems.forEach(tabsItem => {
        tabsItem.addEventListener('click', e => {
            e.preventDefault();
            const active = tabs.querySelector('.tabs__item.active');
            if (active === tabsItem) return false;
            active.classList.remove('active');
            tabsItem.classList.add('active');

            const activeTabContent = tabs.querySelector('.tabs__block.active');
            activeTabContent.classList.remove('active');
            const tabsContentSelector = tabsItem.getAttribute('href');
            const tabsContent = tabs.querySelector(tabsContentSelector);
            tabsContent.classList.add('active');
        });
    });
}