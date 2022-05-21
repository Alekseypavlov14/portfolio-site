import { FC } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { IProject } from '../../types/Project.interface'
import { Description } from '../Description/Description'
import { Reference } from '../Reference/Reference'
import cn from 'classnames'
import styles from './Card.module.css'

interface CardProps extends IProject {}

const Card: FC<CardProps> = ({
  name, 
  description, 
  technologies, 
  link, 
  repository, 
  date 
}) => {
  const theme = useSelector(themeSelector)

  return (
    <div className={cn(styles.Card, styles[theme])}>
      <div className={styles.Name}>
        {name}
      </div>
      <div className={styles.Description}>
        <Description text={description} max={100}/>
      </div>

      <div className={styles.Links}>
        <div className={styles.Link}>
          <span className={styles.Word}>
            Link: 
          </span>
          <Reference to={link} className={styles.Anchor} />
        </div>
        <div className={styles.Repository}>
          <span className={styles.Word}>
            Repo: 
          </span>
          <Reference to={repository} className={styles.Anchor} />
        </div>
      </div>

      <div className={styles.Footer}>
        <div className={styles.Technologies}>
          {technologies.map((technology, index) => (
            <div className={styles.Technology} key={index}>
              {technology}
            </div>
          ))}
        </div>

        <div className={styles.Date}>
          {date}
        </div>
      </div>
    </div>
  )
}

export { Card }