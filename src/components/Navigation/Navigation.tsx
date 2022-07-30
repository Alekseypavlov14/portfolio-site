import { FC } from 'react'
import { NavLink } from '../NavLink/NavLink'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { isMenuOpened } from '../../features/burger/burgerSlice'
import styles from './Navigation.module.css'
import cn from 'classnames'

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const theme = useSelector(themeSelector)
  const isOpened = useSelector(isMenuOpened)

  return (
    <div 
      className={cn(
        styles.Navigation, 
        styles[theme], 
        isOpened && styles.isOpened
      )}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  )
}

export { Navigation }
