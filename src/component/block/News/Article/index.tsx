import Icon from '../../../ui/Icon'
import s from './Article.module.scss'

export default function Article(props: ArticleProps) {
  return (
    <article className={s.article}>
      <header className={s.article__top}>
        <Icon
          name={props.icon}
          wrapClassName={s['article__icon-wrap']}
          iconClassName={s.article__icon}
          round
        />
        <h2 className={s.article__header}>{props.title}</h2>
      </header>
      <p className={s.article__text}>{props.text}</p>
      <a className={s.article__link} href={props.href}>
        <hr className={s.article__line} />
        <div className={s['article__link-wrap']}>
          TEXT
          <svg className={s.arrow} width="32" height="12" viewBox="0 0 32 12" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line className={s.arrow__line} y1="6" x2="18" y2="6" stroke="black" stroke-width="2" />
            <path className={s.arrow__triangle} d="M24 6L17.25 11.1962L17.25 0.803848L24 6Z" fill="black" />
          </svg>
        </div>
      </a>
    </article>
  )
}

type ArticleProps = {
  title: string
  text: string
  href: string
  icon: 'earth' | 'lamp'
}
