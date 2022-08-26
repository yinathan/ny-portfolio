import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/elevar.png'
import IMG2 from '../../assets/vineyard.png'
import IMG3 from '../../assets/breakout.png'
import IMG4 from '../../assets/game-deals.png'
import IMG5 from '../../assets/golf-store.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Elevar CRM',
    github: 'https://github.com/yinathan/elevar_crm',
    demo: 'https://elevarcrm.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Vineyard',
    github: 'https://github.com/yinathan/Wine-Frontend',
    demo: 'https://sasquatch-winos.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Breakout',
    github: 'https://github.com/yinathan/breakout-game',
    demo: 'https://breakout-ny.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Game Deals',
    github: 'https://github.com/yinathan/game-deals-app',
    demo: 'https://game-sale-deals.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Golf Store',
    github: 'https://github.com/yinathan/golf-store',
    demo: 'https://golf-store.herokuapp.com/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn'>
                  GitHub
                </a>

                <a
                  href={demo}
                  className='btn btn-primary'
                  target={'_blank'}
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
