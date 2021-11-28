/**
 * FRONT END DEVELOPER
 */

const data_front_end = [
  {
    title: 'Basic HTML,CSS,JS',
    url: 'basic-html-css-js',
  },
  {
    title: 'Bahasa Pemrograman',
    url: 'bahasa-pemprograman',
  },
  {
    title: 'Version Control',
    url: 'version-control',
  },
  {
    title: 'Relational Databases',
    url: 'relational-databases',
  },
  {
    title: 'NoSQL Databases',
    url: 'nosql-database',
  },
  {
    title: 'APIS',
    url: 'apis',
  },
  {
    title: 'Web Security',
    url: 'web-security',
  },
];

const menu_list = document.querySelector('.menu-list');
const menu_mobile_list = document.querySelector('.menu-mobile-list');

data_front_end.map((item, index) => {
  if (index == data_front_end.length - 1) {
    menu_list.innerHTML += `<div class="menu-item">
    <a href="#${item.url}" class="menu__circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-circle-fill"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
    </a>
    <div class="menu__detail">
      <div class="menu__detail--main">
        <p>${item.title}</p>
      </div>
    </div>
  </div>
  `;
  } else {
    menu_list.innerHTML += `<div class="menu-item">
    <a href="#${item.url}" class="menu__circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-circle-fill"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
    </a>
    <div class="menu__detail">
      <div class="menu__detail--main">
        <p>${item.title}</p>
      </div>
    </div>
  </div>
  <div class="menu__line"></div>`;
  }
});

data_front_end.map((item, index) => {
  if (index == data_front_end.length - 1) {
    menu_mobile_list.innerHTML += `<div class="menu-mobile-item">
    <a href="#${item.url}" class="menu-mobile__circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-circle-fill"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
      <p>${item.title}</p>
    </a>
  </div>
  `;
  } else {
    menu_mobile_list.innerHTML += `<div class="menu-mobile-item">
    <a href="#${item.url}" class="menu-mobile__circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-circle-fill"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
      <p>${item.title}</p>
    </a>
  </div>
  <div class="menu-mobile__line"></div>`;
  }
});

/**
 * SCROLL MENU
 */

const el_section = document.querySelectorAll('section');
const el_menu_item = document.querySelectorAll('.menu__circle');
const el_menu_mobile_item = document.querySelectorAll('.menu-mobile__circle');

const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
};

const changeStep = () => {
  const scrollDistance = window.scrollY;

  el_section.forEach(function (item, index) {
    const el_selected = document.querySelector('.selected');
    const el_mobile_selected = document.querySelector('.selected-mobile');

    if (getOffset(item).top <= scrollDistance) {
      el_menu_item[index].classList.add('selected');
      if (el_selected) {
        el_selected.classList.remove('selected');
      }

      el_menu_mobile_item[index].classList.add('selected-mobile');
      if (el_mobile_selected) {
        el_mobile_selected.classList.remove('selected-mobile');
      }
    }
  });
};

window.onload = changeStep();

window.addEventListener('scroll', () => {
  changeStep();
});
