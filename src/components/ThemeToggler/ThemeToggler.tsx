import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { light, dark} from './../../features/theme/themeSlice'
import styles from './ThemeToggler.module.css'
import cn from 'classnames'

interface ThemeTogglerProps {}

const ThemeToggler: FC<ThemeTogglerProps> = (props) => {
  const theme = useSelector(themeSelector)
  const dispatch = useDispatch()

  const LIGHT_THEME_BUTTON_TEXT = 'light_mode'
  const DARK_THEME_BUTTON_TEXT = 'dark_mode'

  return (
    <div className={cn(styles.ThemeToggler, styles[theme])}>
      <div 
        className="material-icons"
        onClick={() => {
          if (theme === 'light') return dispatch(dark())
          if (theme === 'dark') return dispatch(light())
        }}
      >
          {theme === 'light'
          ? LIGHT_THEME_BUTTON_TEXT
          : DARK_THEME_BUTTON_TEXT}
        </div>
    </div>
  )
}

export { ThemeToggler }