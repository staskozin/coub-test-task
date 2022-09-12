const menuButton = document.querySelector('.header__menu-button')

menuButton.addEventListener('click', (e) => {
  const menu = document.querySelector('.menu')
  if (menuButton.classList.contains('menu-button_close')) {
    menuButton.classList.remove('menu-button_close')
    menu.classList.add('menu_hidden')
  } else {
    menuButton.classList.add('menu-button_close')
    menu.classList.remove('menu_hidden')
  }
})
