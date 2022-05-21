import { FC } from 'react'
import { Link } from 'react-router-dom'
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
        <Link className={styles.Link} to='/'>Home</Link>
        <Link className={styles.Link} to='/about'>About</Link>
        <Link className={styles.Link} to='/contacts'>Contacts</Link>
      </div>

      <div className={styles.Menu}>
        <Menu />
      </div>
    </div>
  )
}

export { Navigation }