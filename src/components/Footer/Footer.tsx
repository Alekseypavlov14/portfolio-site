import { FC } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { Link } from 'react-router-dom'
import { Reference } from '../Reference/Reference'
import styles from './Footer.module.css'
import cn from 'classnames'

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const theme = useSelector(themeSelector)

  return (
    <footer className={cn(styles.Footer, styles[theme])}>
      <div className={styles.FooterColumns}>
        <div className={styles.Navigation}>
          <h4 className={styles.Headline}>
            Navigation
          </h4>
          <Link className={styles.Link} to='/'>Home</Link>
          <Link className={styles.Link} to='/about'>About</Link>
          <Link className={styles.Link} to='/contacts'>Contacts</Link>
        </div>
  
        <div className={styles.Author}>
          <h4 className={styles.Headline}>
            Author
          </h4>
          <div className={styles.AuthorName}>
            Aleksey Pavlov
          </div>
          <div className={styles.AuthorMail}>
            <Reference 
              className={styles.Link} 
              to='mailto://aleshapavlov9@gmail.com'
              children='aleshapavlov9@gmail.com'
            />
          </div>
        </div>
      </div>
      <div className={styles.Copyright}>&copy; Aleksey Pavlov 2022</div>
    </footer>
  )
}

export { Footer }