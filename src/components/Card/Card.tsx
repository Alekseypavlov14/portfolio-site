import { FC } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { IProject } from '../../types/Project.interface'
import cn from 'classnames'
import styles from './Card.module.css'

interface CardProps extends IProject {}

const Card: FC<CardProps> = ({
  name, 
  description, 
  technologies, 
  link, 
  repository, 
  date, 
  ...props
}) => {
  const theme = useSelector(themeSelector)

  return (
    <div className={cn(styles.Card, styles[theme])}>
      <div className={styles.Name}>
        {name}
      </div>
      <div className={styles.Description}>
        {description}
      </div>

      <div className={styles.Links}>
        <div className={styles.Link}>
          <span className={styles.Word}>
            Link: 
          </span>
          <a 
            href={link} 
            className={styles.Anchor}
            target='_blank'
            rel='noreferrer'
          >
            {link}
          </a>
        </div>
        <div className={styles.Repository}>
          <span className={styles.Word}>
            Repo: 
          </span>
          <a 
            href={repository} 
            className={styles.Anchor}
            target='_blank'
            rel='noreferrer'
          >
            {repository}
          </a>
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