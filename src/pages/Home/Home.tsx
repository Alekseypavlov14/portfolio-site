import { FC, useEffect, useState } from 'react'
// components
import { Card } from '../../components/Card/Card'
import { Query } from './../../components/Query/Query'
// redux
import { themeSelector } from '../../features/theme/themeSlice'
import { technologiesSelector } from '../../features/project/projectSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addProjects, filteredProjectsSelector } from '../../features/project/projectSlice'
// utils
import { APIRequest } from '../../utils/APIRequest'
import { sort } from '../../utils/Sort'
// styles
import styles from './Home.module.css'
import element from './../../styles/Element.module.css'
import cn from 'classnames'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const theme = useSelector(themeSelector)
  const dispatch = useDispatch()

  const filteredProjects = useSelector(filteredProjectsSelector)
  const technologies = useSelector(technologiesSelector)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    APIRequest('/projects')
    .then(data => dispatch(addProjects(data.projects)))
    .then(() => setLoading(false))
  }, [dispatch])

  const options = sort
    .inAlphabet(technologies)
    .map(technology => ({
      value: technology,
      label: technology
    }))

  return (
    <div className={cn(element.Page, element[theme], styles[theme])}>
      <div className={element.Container}>
        <Query options={options} />

        {loading && (
          <div className={styles.Loading}>
            loading ...
          </div>
        )}

        <div className={styles.Projects}>
          {sort.byDate(filteredProjects).map((project, index) => (
            <Card {...project} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Home }