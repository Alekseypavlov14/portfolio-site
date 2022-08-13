import { FC, Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import Select from 'react-select'
import styles from './Query.module.css'
import cn from 'classnames'
import './Select.scss'

interface Option {
  label: string,
  value: string
}

interface QueryProps {
  value: Option[]
  options: Option[]
  setTechnologies: Dispatch<SetStateAction<string[]>>
}

const Query: FC<QueryProps> = ({ 
  value,
  options, 
  setTechnologies
}) => {
  const theme = useSelector(themeSelector)
  
  return (
    <div className={cn(styles.Query, styles[theme])}>
      <Select 
        onChange={(e) => setTechnologies(e.map((option) => option.value))}
        classNamePrefix={'select__' + theme}
        placeholder='Select tools...'
        options={options}
        value={value}
        isMulti
      />
    </div>
  )
}

export { Query }