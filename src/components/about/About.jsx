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
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>
    <p>
  I am a full-stack software developer who is constantly striving to learn and create. A resourceful team player, I keep others in mind whether they are on my team or the final audience for the products I work on and manage. With a background in music and dentistry, I am able to use skills I've learned over the years to tackle a problem with creativity and perseverance.
</p>

    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
