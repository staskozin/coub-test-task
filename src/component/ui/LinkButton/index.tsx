import { Link } from 'react-router-dom'

import s from './LinkButton.module.scss'

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Link className={`${s.button} ${props.className ? props.className : ''}`} to={props.href}>
      {props.text}
    </Link>
  )
}

type LinkButtonProps = {
  href: string
  className?: string
  text: string
}
