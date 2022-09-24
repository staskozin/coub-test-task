import Fact from './Fact'
import s from './Facts.module.scss'

export default function Facts() {
  return (
    <>
      <h2 className={s.facts__header}>TEXT_TEXT</h2>
      <ol className={s.facts__list}>
        <Fact number={1} icon="checklist" text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT" />
        <Fact number={2} icon="handshake" text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT" />
        <Fact number={3} icon="gears" text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT" />
        <Fact number={4} icon="document" text="TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT" />
      </ol>
    </>
  )
}
