import { FC, useEffect, useState } from 'react'
// components
import { Card } from '../../components/Card/Card'
import { Query } from './../../components/Query/Query'
// redux
import { themeSelector } from '../../features/theme/themeSlice'
import { useSelector } from 'react-redux'
// utils
import { getTechnologies } from '../../utils/GetTechnologies'
import { APIRequest } from '../../utils/APIRequest'
import { query } from '../../utils/Query'
import { sort } from '../../utils/Sort'
// types
import { IProject } from '../../types/Project.interface'
// styles
import styles from './Home.module.css'
import element from './../../styles/Element.module.css'
import cn from 'classnames'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const theme = useSelector(themeSelector)

  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState<IProject[]>([])
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>([])
  const [technologies, setTechnologies] = useState<string[]>([])

  useEffect(() => {
    setLoading(true)
    APIRequest('/projects')
      .then(data => setProjects(data.projects))
      .then(() => setLoading(false))
  }, [])

  useEffect(() => {
    setFilteredProjects(query.sort(projects, technologies))
  }, [technologies, projects])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [technologies])

  const options = sort
    .inAlphabet(getTechnologies(projects))
    .map(technology => ({
      value: technology,
      label: technology,
    }))

  const value = technologies
    .map(technology => ({
      value: technology,
      label: technology,
    }))

  return (
    <div className={cn(element.Page, element[theme], styles[theme])}>
      <div className={element.Container}>
        <Query
          value={value}
          options={options}
          setTechnologies={setTechnologies}
        />

        <div className={styles.SearchResult}>
          {loading && <div className={styles.Loading}>loading ...</div>}
  
          {technologies.length !== 0 && (
            <div className={styles.ResultAmount}>
              {filteredProjects.length === 1
                ? `${filteredProjects.length} project was found`
                : `${filteredProjects.length} projects were found`}
            </div>
          )}

          <div className={styles.Projects}>
            {sort.byDate(filteredProjects).map((project, index) => (
              <Card 
                setTechnology={setTechnologies}
                {...project} 
                key={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Home }
