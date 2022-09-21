import s from './Facts.module.scss'

export default function Facts() {
  return (
    <>
      <h2 className="facts__header">TEXT_TEXT</h2>
      <ol className="facts__list">
        <li className="facts__item">
          <div className="icon-wrap facts__icon-wrap">
            <img src="img/checklist.png" alt="" className="facts__icon" />
          </div>
          <p className="facts__text">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
          <span className="facts__number">1</span>
        </li>
        <li className="facts__item">
          <div className="icon-wrap facts__icon-wrap">
            <img src="img/handshake.png" alt="" className="facts__icon" />
          </div>
          <p className="facts__text">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
          <span className="facts__number">2</span>
        </li>
        <li className="facts__item">
          <div className="icon-wrap facts__icon-wrap">
            <img src="img/gears.png" alt="" className="facts__icon" />
          </div>
          <p className="facts__text">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
          <span className="facts__number">3</span>
        </li>
        <li className="facts__item">
          <div className="icon-wrap facts__icon-wrap">
            <img src="img/document.png" alt="" className="facts__icon" />
          </div>
          <p className="facts__text">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
          <span className="facts__number">4</span>
        </li>
      </ol>
    </>
  )
}
