import { Link } from 'react-router-dom'

import s from './Menu.module.scss'

export default function Menu(props: MenuProps) {
  return (
    <>
      <input type="checkbox" className={s.toggle} id="menu-toggle" />
      <label className={s.button} title="menu" role="button" htmlFor="menu-toggle">
        <div className={s.button__line}></div>
      </label>
      <nav className={s.menu}>
        {props.items.map(item => {
          return <Link to={item.href} className={s.menu__item} key={item.id}>{item.text}</Link>
        })}
      </nav>
    </>
  )
}

type MenuProps = {
  items: Array<MenuItem>
}

export type MenuItem = {
  href: string
  text: string
  id: number
}
