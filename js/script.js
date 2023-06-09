/* кнопка_бургер_меню */

document.querySelector('.header__burger').addEventListener('click', function () {
})

/* выпадающее_бургер_меню */

const burger = document.querySelector('.header__burger');
const headerMenuList = document.querySelector('.header__nav');

burger.addEventListener('click', function () {
  burger.classList.toggle('cross');
  headerMenuList.classList.toggle('show');
})

const navLinks = document.querySelectorAll('.header__nav__link');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    burger.classList.toggle('cross');
    headerMenuList.classList.toggle('show');
  })
})

/* поиск */

const searchBtn = document.querySelector('.header__nav-list-item-search')

let lyp = document.querySelector('.header__nav-list-item-search');
let search = document.querySelector('.navigation__search');
let exit = document.querySelector('.exit');

lyp.addEventListener('click', function () {
  search.classList.toggle('navigation__search-active');
});

exit.addEventListener('click', function () {
  search.classList.toggle('navigation__search-active');
});

/* свайпер */

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // area-label
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});

document.querySelectorAll('.step__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.step__btn').forEach(function (btn) {
      btn.classList.remove('step__btn--active')
    });
    e.currentTarget.classList.add('step__btn--active');
    document.querySelectorAll('.consultation-wrapper').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('consultation-wrapper--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('consultation-wrapper--active');
  });
});

$('.reviews__list').accordion({
  active: false,
  collapsible: true,
  header: ".acc-header",
  heightStyle: "content",
  icons: { "header": "plus", "activeHeader": "plus plus-active" },
});

