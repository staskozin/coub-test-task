import s from './Icon.module.scss'

export default function Icon(props: IconProps) {
  return (
    <div className={`${s.wrap} ${props.round ? s.wrap_round : ''} ${props.wrapClassName ? props.wrapClassName : ''}`}>
      <img
        src={`img/${props.name}.png`}
        alt={props.name}
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
}
