import s from './Header.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
      <a href="index.html">
        <img src="img/logo.png" alt="LOGO" className={s.header__logo} />
      </a>
      <a href="index.html" className={`${s.logo} ${s['header__logo-text']}`}>LOGO</a>
      <nav className={`${s.menu} ${s.menu_hidden}`}>
        <a href="stub.html" className={s.menu__item}>TEXT</a>
        <a href="stub.html" className={s.menu__item}>TEXT_TEXT</a>
        <a href="stub.html" className={s.menu__item}>TEXT_TEXT_TEXT</a>
      </nav>
      <button className={`${s['menu-button']} ${s['header__menu-button']}`} title="menu" type="button">
        <div className={`${s['menu-button__line']} ${s['menu-button__line_top']}`}></div>
        <div className={`${s['menu-button__line']} ${s['menu-button__line_mid']}`}></div>
        <div className={`${s['menu-button__line']} ${s['menu-button__line_bot']}`}></div>
      </button>
    </header>
  )
}