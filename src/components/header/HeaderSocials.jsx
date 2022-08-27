import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/yi-nathan/' target='blank'><BsLinkedin/></a>
      <a href='https://github.com/yinathan' target='blank'><FaGithub /></a>
      <a href='https://twitter.com/NathanYiTech' target='blank'><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials
