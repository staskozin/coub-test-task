import { Link } from 'react-router-dom'

import Menu, { MenuItem } from '../../ui/Menu'
import s from './Header.module.scss'

import Logo from '../../../img/logo.png'

export default function Header() {
  const menuItems: Array<MenuItem> = [
    {
      href: '/stub',
      text: 'TEXT',
      id: 1
    },
    {
      href: '/stub',
      text: 'TEXT_TEXT',
      id: 2
    },
    {
      href: '/stub',
      text: 'TEXT_TEXT_TEXT',
      id: 3
    }
  ]

  return (
    <header className={s.header}>
      <Link className={s['logo-icon-wrap']} to="/" aria-label="Home">
        <img src={Logo} className={s['logo-icon']} alt="LOGO" />
      </Link>
      <Link to="/" className={s.logo} aria-label="Home">LOGO</Link>
      <div className={s.background}></div>
      <Menu items={menuItems} />
    </header>
  )
}
