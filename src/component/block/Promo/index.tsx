import LinkButton from '../../ui/LinkButton'
import s from './Promo.module.scss'

import Art from '../../../img/art.png'

export default function Promo(props: PromoProps) {
  return (
    <div className={s.promo}>
      <h1 className={s.promo__header}>{props.title}</h1>
      <span className={s.promo__text}>{props.text}</span>
      <img className={s.promo__img} src={Art} alt="Art" />
      <LinkButton href={props.linkHref} className={s.promo__button} text={props.linkText} />
    </div>
  )
}

type PromoProps = {
  title: string
  text: string
  linkText: string
  linkHref: string
}
