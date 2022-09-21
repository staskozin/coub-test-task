import s from './News.module.scss'

export default function News() {
  return (
    <>
      <article className="news-block">
        <header className="news-block__top">
          <div className="news-block__icon-wrap icon-wrap icon-wrap_round">
            <img src="img/lamp.png" alt="" className="news-block__icon" />
          </div>
          <h2 className="news-block__header">TEXT_TEXT</h2>
        </header>
        <p className="news-block__text">
          TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
          TEXT TEXT
        </p>
        <a className="news-block__link" href="stub.html">
          <hr className="news-block__line" />
          <div className="news-block__link-wrap">
            TEXT
            <svg className="arrow news-block__arrow" width="32" height="12" viewBox="0 0 32 12" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line className="arrow__line" y1="6" x2="18" y2="6" stroke="black" stroke-width="2" />
              <path className="arrow__triangle" d="M24 6L17.25 11.1962L17.25 0.803848L24 6Z" fill="black" />
            </svg>
          </div>
        </a>
      </article>

      <article className="news-block">
        <header className="news-block__top">
          <div className="news-block__icon-wrap icon-wrap icon-wrap_round">
            <img src="img/earth.png" alt="" className="news-block__icon" />
          </div>
          <h2 className="news-block__header">TEXT_TEXT</h2>
        </header>
        <p className="news-block__text">
          TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
          TEXT TEXT
        </p>
        <a className="news-block__link" href="stub.html">
          <hr className="news-block__line" />
          <div className="news-block__link-wrap">
            TEXT
            <svg className="arrow news-block__arrow" width="32" height="12" viewBox="0 0 32 12" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line className="arrow__line" y1="6" x2="18" y2="6" stroke="black" stroke-width="2" />
              <path className="arrow__triangle" d="M24 6L17.25 11.1962L17.25 0.803848L24 6Z" fill="black" />
            </svg>
          </div>
        </a>
      </article>
    </>
  )
}
