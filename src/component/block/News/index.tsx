import Article from './Article'
import s from './News.module.scss'

export default function News() {
  return (
    <div className={s.news}>
      <Article
        title="TEXT_TEXT"
        text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
        icon="lamp"
        href="/stub"
      />
      <Article
        title="TEXT_TEXT"
        text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
        icon="earth"
        href="/stub"
      />
    </div>
  )
}
