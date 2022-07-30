import { FC } from 'react'
import { NavLink as Link } from 'react-router-dom'
import styles from './NavLink.module.css'

interface NavLinkProps {
  to: string
  children: string
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      className={({ isActive }) => (
        isActive ? styles.ActiveLink : styles.Link
      )} 
      to={to}
    >
      {children}
    </Link>
  )
}