import { FC } from 'react'
import { Card } from '../../components/Card/Card'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { filteredProjectsSelector } from '../../features/project/projectSlice'
import { Query } from './../../components/Query/Query'
import styles from './Home.module.css'
import cn from 'classnames'

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  const projects = useSelector(filteredProjectsSelector)
  const theme = useSelector(themeSelector)

  return (
    <div className={cn(styles.Home, styles[theme])}>
      <div className={styles.HomeContainer}>
        <Query />

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