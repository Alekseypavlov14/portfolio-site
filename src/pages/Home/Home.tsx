import { FC } from 'react'
import { Card } from '../../components/Card/Card'
import styles from './Home.module.css'

import projects from './../../data/projects.json'

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  return (
    <div className={styles.Home}>
      {projects.map((project, index) => (
        <Card {...project} />
      ))}
    </div>
  )
}

export { Home }