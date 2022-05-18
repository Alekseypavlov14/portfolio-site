import { FC } from 'react'
import { Card } from '../../components/Card/Card'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { filteredProjectsSelector, technologiesSelector } from '../../features/project/projectSlice'
import { Query } from './../../components/Query/Query'
import styles from './Home.module.css'
import cn from 'classnames'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const projects = useSelector(filteredProjectsSelector)
  const technologies = useSelector(technologiesSelector)
  const theme = useSelector(themeSelector)

  const options = technologies.map(technology => ({
    value: technology,
    label: technology
  }))

  return (
    <div className={cn(styles.Home, styles[theme])}>
      <div className={styles.HomeContainer}>
        <Query options={options} />

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