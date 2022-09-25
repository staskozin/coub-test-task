import Menu, { MenuItem } from '../../ui/Menu'
import s from './Header.module.scss'

export default function Header() {
  const menuItems: Array<MenuItem> = [
    {
      href: 'stub.html',
      text: 'TEXT',
      id: 1
    },
    {
      href: 'stub.html',
      text: 'TEXT_TEXT',
      id: 2
    },
    {
      href: 'stub.html',
      text: 'TEXT_TEXT_TEXT',
      id: 3
    }
  ]

  return (
    <header className={s.header}>
      <a className={s['logo-icon-wrap']} href="index.html">
        <img src="img/logo.png" className={s['logo-icon']} alt="LOGO" />
      </a>
      <a href="index.html" className={s.logo}>LOGO</a>
      <div className={s.background}></div>
      <Menu items={menuItems} />
    </header>
  )
}
