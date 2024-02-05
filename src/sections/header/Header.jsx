import React from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Joseph Layton</h3>
        <p>
          You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile repsonsive, highly performant webstite today!
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Contact Me</a>
          <a href="#portfolio" className='btn light'>My Portfolio</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header