import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'
import { themeSelector } from '../../features/theme/themeSlice'
import cn from 'classnames'
import styles from './Header.module.css'

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  const theme = useSelector(themeSelector)

  return (
    <div className={cn(styles.Header, styles[theme])}>
      <div className={styles.HeaderContainer}>
        <div className={styles.Links}>
          <Link className={styles.Link} to='/'>Home</Link>
          <Link className={styles.Link} to='/about'>About</Link>
          <Link className={styles.Link} to='/contacts'>Contacts</Link>
        </div>
        <ThemeToggler />
      </div>
    </div>
  )
}

export { Header }