import React from 'react'
import { HiX } from 'react-icons/hi'

const Menu = ({handleMenu}) => {
  const close = ()=>{
    handleMenu(false)
  }
  const top = '#home'
  return (
    <>
      <menu className='menu'>
        <div className='cancel' onClick={close}>
          <HiX />
        </div>
        <div className='content'>
          <a href={top} onClick={close}>Home</a>
          <a href='#about' onClick={close}>About</a>
          <a href='#download' onClick={close}>Download</a>
          <a href='#contact-us' onClick={close}>Contact Us</a>
        </div>
      </menu>
      <div className='backdrop' onClick={close}></div>
    </>
  )
}

export default Menu