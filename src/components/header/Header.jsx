import React from 'react'
import logo from "../../assets/Logo-react.png"
import DefaultButton from '../buttons/DefaultButton'
import { HiMenuAlt3 } from "react-icons/hi";

const Header = ({toggleMenu}) => {
  const scrollToDownload = ()=>{
    const downloadElement = document.getElementById("download")
    if(downloadElement){
      downloadElement.scrollIntoView()
    }
  }

  const top = '#home'

  return (
    <>
      <header className='header'>
        <div className='content'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='links-holder'>
          <a href={top}>Home</a>
          <a href='#about'>About</a>
          <a href='#contact-us'>Contact Us</a>
        </div>
        <DefaultButton text={"Download"} action={()=>{
          scrollToDownload()
        }} />
        <div className='hamburger' onClick={toggleMenu}>
          <HiMenuAlt3 />
        </div>
        <div className='line'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1438" height="28" viewBox="0 0 1438 28" fill="none">
            <path d="M0.5 1H481L506.5 26.5H929.5L955 1H1438" stroke="black" stroke-width="1"/>
          </svg>
        </div>
        </div>
      </header>
    </>
  )
}

export default Header