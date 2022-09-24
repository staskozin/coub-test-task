import LinkButton from '../../ui/LinkButton'
import s from './Promo.module.scss'

export default function Promo() {
  return (
    <div className={s.promo}>
      <h1 className={s.promo__header}>TEXT_TEXT_TEXT</h1>
      <span className={s.promo__text}>TEXT_TEXT_TEXT_TEXT</span>
      <img className={s.promo__img} src="img/art.png" alt="art" />
      <LinkButton href="stub.html" className={s.promo__button} text="TEXT_TEXT_TEXT"/>
    </div>
  )
}
