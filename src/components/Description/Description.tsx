import { FC, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import styles from './Description.module.css'
import cn from 'classnames'

interface DescriptionProps {
  text: string,
  max: number
}

const Description: FC<DescriptionProps> = ({ 
  text, 
  max 
}) => {
  const MAX_TEXT_LENGTH = max
  const theme = useSelector(themeSelector)
  const [isOpened, setOpened] = useState(false)
  const toggle = () => setOpened(!isOpened)

  const isLong = useMemo(() => {
    return text.length > MAX_TEXT_LENGTH
  }, [text.length, MAX_TEXT_LENGTH])

  return (
    <div className={cn(styles.Description, styles[theme])}>
      {
        isLong 
        ? (
          isOpened 
          ? <span onClick={toggle}>{text}</span> 
          : (
            <>
              <span>{text.slice(0, MAX_TEXT_LENGTH)}</span>
              ...
              <span className={styles.MoreLink} onClick={toggle}>more</span>
            </> 
          )
        ) 
        : <span>{text}</span>
      }
    </div>
  )
}

export { Description }