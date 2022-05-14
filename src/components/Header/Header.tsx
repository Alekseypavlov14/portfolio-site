import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className={styles.Header}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contacts'>Contacts</Link>
    </div>
  )
}

export { Header }