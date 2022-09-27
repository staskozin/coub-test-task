import Article from './Article'
import s from './News.module.scss'

import Lamp from '../../../img/lamp.png'
import Earth from '../../../img/earth.png'

export default function News() {
  return (
    <div className={s.news}>
      <Article
        title="TEXT_TEXT"
        text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
        icon={Lamp}
        href="/stub"
      />
      <Article
        title="TEXT_TEXT"
        text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
        icon={Earth}
        href="/stub"
      />
    </div>
  )
}
