import { FC } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import styles from './About.module.css'
import element from './../../styles/Element.module.css'
import cn from 'classnames'

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const theme = useSelector(themeSelector)
  
  return (
    <div className={cn(element.Page, element[theme], styles[theme])}>
      <div className={element.Container}>
        About Page
      </div>
    </div>
  )
}

export { About }