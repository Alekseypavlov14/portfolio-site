import { FC } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import styles from './ThemeToggler.module.css'

interface ThemeTogglerProps {}

const ThemeToggler: FC<ThemeTogglerProps> = (props) => {
  const theme = useSelector(themeSelector)

  const LIGHT_THEME_BUTTON_TEXT = 'light_mode'
  const DARK_THEME_BUTTON_TEXT = 'dark_mode'

  return (
    <div className={styles.ThemeToggler}>
      <div className="material-icons">
          {theme === 'light'
          ? LIGHT_THEME_BUTTON_TEXT
          : DARK_THEME_BUTTON_TEXT}
        </div>
    </div>
  )
}

export { ThemeToggler }