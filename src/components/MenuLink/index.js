import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

const MenuLink = ({ children, to}) => {

  let location = useLocation()

  return (
    <Link
        className={`
          ${styles.link}
          ${location.pathname === to ? styles.linkDestacado : ''}
        `} to={to}>
        {children}
    </Link>
  )
}

export default MenuLink