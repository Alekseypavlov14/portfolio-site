import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { sort } from './../../features/project/projectSlice'
import Select from 'react-select'
import styles from './Query.module.css'

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
  const dispatch = useDispatch()

  return (
    <div className={styles.Query}>
      <Select 
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