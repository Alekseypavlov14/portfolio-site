import { FC } from 'react'
import styles from './Home.module.css'

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  return (
    <div className={styles.Home}>
      Home Page
    </div>
  )
}

export { Home }