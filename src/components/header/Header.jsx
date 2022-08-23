import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ny-headshot.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Nathan Yi</h1>
            <h5 className='text-light'>FullStack Developer
            </h5>
            <CTA />

            <HeaderSocials />

            <div className="me">
                <img src={ME} alt="m" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
    )
}

export default Header