import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Nathan Yi
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/nathan.yi.14/'><FaFacebookF /></a>
        <a href='https://twitter.com/NathanYiTech'><IoLogoTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; yinathan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
