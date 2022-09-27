import Icon from '../../../ui/Icon'
import s from './Fact.module.scss'

export default function Fact(props: FactProps) {
  return (
    <li className={s.fact}>
      <Icon name={props.icon} wrapClassName={s['icon-wrap']} iconClassName={s.icon} />
      <p className={s.text}>{props.text}</p>
      <span className={s.number}>{props.number}</span>
    </li>
  )
}

type FactProps = {
  text: string
  icon: string
  number: number
}
