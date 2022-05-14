import { FC } from 'react'
import styles from './About.module.css'

interface AboutProps {}

const About: FC<AboutProps> = (props) => {
  return (
    <div className={styles.About}>
      About Page
    </div>
  )
}

export { About }