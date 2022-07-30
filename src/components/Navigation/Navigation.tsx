import { FC } from 'react'
import { NavLink } from '../NavLink/NavLink'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { Menu } from '../Menu/Menu'
import styles from './Navigation.module.css'
import cn from 'classnames'

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const theme = useSelector(themeSelector)

  return (
    <div className={cn(styles.Navigation, styles[theme])}>
      <div className={styles.Links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>

      <div className={styles.Menu}>
        <Menu />
      </div>
    </div>
  )
}

export { Navigation }
