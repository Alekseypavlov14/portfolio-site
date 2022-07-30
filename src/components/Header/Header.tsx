import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'
import { themeSelector } from '../../features/theme/themeSlice'
import { Navigation } from './../Navigation/Navigation'
import styles from './Header.module.css'
import element from './../../styles/Element.module.css'
import cn from 'classnames'
import { BurgerButton } from '../BurgerButton/BurgerButton'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const theme = useSelector(themeSelector)

  return (
    <header className={cn(styles.Header, styles[theme])}>
      <div className={cn(element.Container, styles.HeaderContainer)}>
        <BurgerButton />
        <Navigation />
        <ThemeToggler />
      </div>
    </header>
  )
}

export { Header }