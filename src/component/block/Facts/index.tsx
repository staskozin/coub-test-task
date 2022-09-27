import Fact from './Fact'
import s from './Facts.module.scss'

import Checklist from '../../../img/checklist.png'
import Handshake from '../../../img/handshake.png'
import Gears from '../../../img/gears.png'
import Document from '../../../img/document.png'

export default function Facts() {
  return (
    <>
      <h2 className={s.facts__header}>TEXT_TEXT</h2>
      <ol className={s.facts__list}>
        <Fact number={1} icon={Checklist} text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT" />
        <Fact number={2} icon={Handshake} text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT" />
        <Fact number={3} icon={Gears} text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT" />
        <Fact number={4} icon={Document} text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT" />
      </ol>
    </>
  )
}
