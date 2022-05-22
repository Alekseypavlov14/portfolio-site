import { FC } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import styles from './About.module.css'
import element from './../../styles/Element.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom'

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const theme = useSelector(themeSelector)
  
  return (
    <div className={cn(element.Page, element[theme], styles[theme])}>
      <div className={element.Container}>
        
        <article className={styles.AboutArticle}>
          <div className={styles.Subtitle}>Hi, I'm Alex</div>
          <div className={styles.Title}>Frontend Developer</div>

          <div className={styles.Section}>
            <h3 className={styles.Headline}>
              Personal
            </h3>

            <p>
              I'm from Ukraine, was born in 2006 year.
              I'm an excellent student. I'm also into sport, 
              play football since 2011. I have been learning Web 
              since the spring of 2021.
            </p>

            <p>
              After the 5th of March of 2022 year, I'm living in Romania 
              because of the russian aggressive attack to my motherland.
            </p>

            <p>
              I'm friendly and enjoy learning new. 
              I'm clever and study quite easy.
            </p>
          </div>

          <div className={styles.Section}>
            <h3 className={styles.Headline}>
              Technical
            </h3>
            <p>
              I like working with modern technologies to create 
              interesting projects. I prefer <b>React</b> to
              other UI libraries. To keep the state
              of the app, I use <b>Redux</b>.
            </p>

            <p>
              For bundling my projects, I use <b>Webpack</b>. 
              With complicated projects I sometimes 
              use <b>Gulp</b>.
            </p>

            <p>
              For decorate my sites I use <b>SASS/SCSS</b> because 
              it is easy to write and scale the code with them.
            </p>

            <p>
              For writing scalable JS applications 
              I use <b>TypeScript</b>.
            </p>

            <p>
              Definitely, I keep my code with <b>Git</b>. Also, 
              I collect my projects in <b>GitHub</b>.
            </p>
          </div>

          <div className={styles.Section}>
            <h3 className={styles.Headline}>
              Contact
            </h3>

            <p>
              I'm happy to help everybody with their beautiful ideas.
              Your project will be nice and we will glad to meet each other :&#41;
            </p>

            <p>
              To contact me follow the <span />
              <Link 
                className={styles.Link}
                to='/contacts'
                children='Contacts'
              />
            </p>
          </div>
        </article>

      </div>
    </div>
  )
}

export { About }