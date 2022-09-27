import s from './Icon.module.scss'

export default function Icon(props: IconProps) {
  return (
    <div aria-hidden className={`${s.wrap} ${props.round ? s.wrap_round : ''} ${props.wrapClassName ? props.wrapClassName : ''}`}>
      <img
        src={props.name}
        alt={props.alt !== undefined ? props.alt : ''}
        className={props.iconClassName ? props.iconClassName : ''}
      />
    </div>
  )
}

type IconProps = {
  name: string
  wrapClassName?: string
  iconClassName?: string
  round?: boolean
  alt?: string
}
