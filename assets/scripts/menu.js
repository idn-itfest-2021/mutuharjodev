/**
 * MENU MOBILE
 */

const html = document.querySelector('html');
const menu_mobile_wrapper = document.getElementById('menu-mobile');
const menu_mobile_btn = document.getElementById('menu__button');
const menu_mobile_btn_icon = document.querySelector('.menu__button--main');

menu_mobile_btn.addEventListener('click', () => {
  if (menu_mobile_wrapper.classList[0] === 'show') {
    html.style.overflowY = 'scroll';

    menu_mobile_wrapper.classList.remove('show');
    menu_mobile_btn_icon.innerHTML = `<svg
     xmlns="http://www.w3.org/2000/svg"
     width="16"
     height="16"
     fill="currentColor"
     class="bi bi-list"
     viewBox="0 0 16 16"
   >
     <path
       fill-rule="evenodd"
       d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
     />
   </svg>`;
  } else {
    html.style.overflowY = 'hidden';

    menu_mobile_wrapper.classList.add('show');
    menu_mobile_btn_icon.innerHTML = `<svg
     xmlns="http://www.w3.org/2000/svg"
     width="16"
     height="16"
     fill="currentColor"
     class="bi bi-x"
     viewBox="0 0 16 16"
   >
     <path
       d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
     />
   </svg>`;
  }
});
