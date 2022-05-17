import { FC } from 'react'
import { Card } from '../../components/Card/Card'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { projectsSelector } from '../../features/projects/projectSlice'
import styles from './Home.module.css'
import cn from 'classnames'

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  const projects = useSelector(projectsSelector)
  const theme = useSelector(themeSelector)

  return (
    <div className={cn(styles.Home, styles[theme])}>
      <div className={styles.HomeContainer}>
        <div className={styles.Projects}>
          {projects.map((project, index) => (
            <Card {...project} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Home }