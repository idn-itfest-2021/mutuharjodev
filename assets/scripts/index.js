/**
 * HEADER
 */

const btn_header_scroll = document.getElementById('btn_header_scroll');

btn_header_scroll.addEventListener('click', () => {
  window.location.href = '#categories';
});

/**
 * CATEGORIES
 */

const data_categories = [
  {
    title: 'FRONT END DEVELOPER',
    desc: 'Software Developer yang bertanggung jawab untuk merancang dan membangun berbagai aplikasi web secara responsif, interaktif, dan juga user friendly.',
    image: 'illust-front-end-categories.svg',
  },
  {
    title: 'BACK END DEVELOPER',
    desc: 'Software Developer yang bertanggung jawab dalam mengelola server, aplikasi, dan database agar dapat saling berkomunikasi dengan baik dan lancar.',
    image: 'illust-back-end-categories.svg',
  },
  {
    title: 'ANDROID DEVELOPER',
    desc: 'Software Developer yang berspesialisasi dalam merancang dan membangun aplikasi untuk pasar operating system Android.',
    image: 'illust-android-categories.svg',
  },
];

const btn_categories_prev = document.getElementById('btn_categories_prev');
const btn_categories_next = document.getElementById('btn_categories_next');
const title_categories = document.querySelector('.categories-detail h1');
const desc_categories = document.querySelector('.categories-detail p');
const image_categories = document.querySelector('.categories-image img');

title_categories.innerText = data_categories[0].title;
desc_categories.innerText = data_categories[0].desc;
image_categories.src = './assets/images/illust/' + data_categories[0].image;

const changeCategorySelected = (desc) => {
  let index_categories_before = 0;
  let index_categories_after = 0;

  for (i = 0; i < data_categories.length; i++) {
    if (data_categories[i].title === title_categories.textContent) {
      index_categories_before = i;
      break;
    }
  }

  if (desc === 'NEXT') {
    index_categories_after =
      index_categories_before + 1 === data_categories.length
        ? 0
        : index_categories_before + 1;
  } else if (desc === 'PREV') {
    index_categories_after =
      index_categories_before - 1 === -1
        ? data_categories.length - 1
        : index_categories_before - 1;
  }

  title_categories.innerText = data_categories[index_categories_after].title;
  desc_categories.innerText = data_categories[index_categories_after].desc;
  image_categories.src =
    './assets/images/illust/' + data_categories[index_categories_after].image;
};

btn_categories_prev.addEventListener('click', () => {
  changeCategorySelected('PREV');
});

btn_categories_next.addEventListener('click', () => {
  changeCategorySelected('NEXT');
});

// CATEGORY SELECT

const btn_categories_select = document.querySelector(
  '.categories-button__select'
);

btn_categories_select.addEventListener('click', () => {
  switch (title_categories.innerText) {
    case 'FRONT END DEVELOPER':
      window.location.href = 'front-end-developer.html';
      break;
    case 'BACK END DEVELOPER':
      window.location.href = 'back-end-developer.html';
      break;
    case 'ANDROID DEVELOPER':
      window.location.href = 'android-developer.html';
      break;
    default:
      window.location.href = 'index.html';
      break;
  }
});
