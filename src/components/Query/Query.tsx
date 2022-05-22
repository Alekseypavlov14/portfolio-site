import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filteredProjectsSelector, sort } from './../../features/project/projectSlice'
import { themeSelector } from '../../features/theme/themeSlice'
import cn from 'classnames'
import Select from 'react-select'
import styles from './Query.module.css'
import './Select.scss'

interface Option {
  label: string,
  value: string
}

interface QueryProps {
  options: Option[]
}

const Query: FC<QueryProps> = ({ options }) => {
  const theme = useSelector(themeSelector)
  const foundProjects = useSelector(filteredProjectsSelector)
  const [isChosen, setChosen] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className={cn(styles.Query, styles[theme])}>
      <Select 
        classNamePrefix={'select__' + theme}
        placeholder='Select tools...'
        options={options}
        isMulti
        onChange={(e) => {
          const technologies = e.map((option) => option.value)
          dispatch(sort(technologies))
          setChosen(Boolean(e.length))
        }}
      />

      {isChosen && (
        <div className={styles.ResultAmount}>
          {foundProjects.length === 1
          ? `${foundProjects.length} project was found`
          : `${foundProjects.length} projects were found`}
        </div>
      )}
    </div>
  )
}

export { Query }