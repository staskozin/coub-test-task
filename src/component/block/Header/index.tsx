import s from './Header.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
      <a href="index.html">
        <img src="img/logo.png" alt="LOGO" className={s.header__logo} />
      </a>
      <a href="index.html" className={`${s.logo} ${s['header__logo-text']}`}>LOGO</a>
      <input type="checkbox" className={s.toggle} id="menu-toggle" />
      <label className={`${s.button} ${s.header__button}`} title="menu" role="button" htmlFor="menu-toggle">
        <div className={s.button__line}></div>
      </label>
      <nav className={s.menu}>
        <a href="stub.html" className={s.menu__item}>TEXT</a>
        <a href="stub.html" className={s.menu__item}>TEXT_TEXT</a>
        <a href="stub.html" className={s.menu__item}>TEXT_TEXT_TEXT</a>
      </nav>
    </header>
  )
}