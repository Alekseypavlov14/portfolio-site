import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink as Link } from 'react-router-dom'
import { themeSelector } from '../../features/theme/themeSlice'
import styles from './NavLink.module.css'
import cn from 'classnames'
import { toggle } from '../../features/burger/burgerSlice'

interface NavLinkProps {
  to: string
  children: string
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  const theme = useSelector(themeSelector)
  const dispatch = useDispatch()

  const closeMenu = () => {
    dispatch(toggle())
  }

  return (
    <Link
      to={to}
      onClick={closeMenu}
      className={({ isActive }) => cn(
        isActive ? styles.ActiveLink : styles.Link,
        styles[theme]
      )}
    >
      {children}
    </Link>
  )
}