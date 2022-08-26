import React from 'react'
import './about.css'
import ME from '../../assets/ny-headshot.png'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
        
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>
    <p>Software Engineer with a background in science and music who is constantly learning and creating. A resourceful team player, I keep others in mind whether they are on my team or the final audience for products I create and work on.
</p>

    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
