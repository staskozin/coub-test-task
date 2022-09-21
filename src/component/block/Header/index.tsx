import s from './Header.module.scss'

export default function Header() {
  return (
    <header className="header">
      <a href="index.html">
        <img src="img/logo.png" alt="LOGO" className="header__logo" />
      </a>
      <a href="index.html" className="logo header__logo-text">LOGO</a>
      <nav className="menu menu_hidden">
        <a href="stub.html" className="menu__item">TEXT</a>
        <a href="stub.html" className="menu__item">TEXT_TEXT</a>
        <a href="stub.html" className="menu__item">TEXT_TEXT_TEXT</a>
      </nav>
      <button className="header__menu-button menu-button" title="menu" type="button">
        <div className="menu-button__line menu-button__line_top"></div>
        <div className="menu-button__line menu-button__line_mid"></div>
        <div className="menu-button__line menu-button__line_bot"></div>
      </button>
    </header>
  )
}