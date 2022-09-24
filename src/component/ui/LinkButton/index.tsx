import s from './LinkButton.module.scss'

export default function LinkButton(props: LinkButtonProps) {
  return <a className={`${s.button} ${props.className ? props.className : ''}`} href={props.href}>{props.text}</a>
}

type LinkButtonProps = {
  href: string
  className?: string
  text: string
}
