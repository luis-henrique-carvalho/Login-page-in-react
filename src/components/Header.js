import React from 'react'
import logo from '../img/logo-uneb.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>

      <img src={logo} alt="" />
      
    </header>
  )
}

export default Header