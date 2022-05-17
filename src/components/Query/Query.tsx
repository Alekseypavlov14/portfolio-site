import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sort } from './../../features/project/projectSlice'
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

const Query: FC<QueryProps> = ({
  options,
  ...props
}) => {
  const theme = useSelector(themeSelector)
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
        }}
      />
    </div>
  )
}

export { Query }