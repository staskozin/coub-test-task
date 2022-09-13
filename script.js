const menuButton = document.querySelector('.header__menu-button')
const menu = document.querySelector('.menu')

menuButton.addEventListener('click', (e) => {
  if (menuButton.classList.contains('menu-button_close')) {
    menuButton.classList.remove('menu-button_close')
    menu.classList.add('menu_hidden')
  } else {
    menuButton.classList.add('menu-button_close')
    menu.classList.remove('menu_hidden')
  }
})
