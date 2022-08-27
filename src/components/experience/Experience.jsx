import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                {' '}
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Styled Components</h4>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                {' '}
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                {' '}
                <h4>Express</h4>
              </div>
            </article>

            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                {' '}
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experince__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
