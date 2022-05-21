import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import cn from 'classnames'

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  const theme = useSelector(themeSelector)
  const [isSidebarHidden, setSidebarHidden] = useState(true)

  const showSidebar = () => setSidebarHidden(false)
  const hideSidebar = () => setSidebarHidden(true)

  return (
    <div className={cn(styles.Menu, styles[theme])}>
      <div 
        className={cn("material-symbols-outlined", styles.MenuIcon)}
        onClick={showSidebar}
        children='menu'
      />

      <div className={cn(styles.Sidebar, (isSidebarHidden && styles.Hidden))}>
        <div className={styles.Header}>
          <div 
            className={cn("material-symbols-outlined", styles.CloseIcon)}
            onClick={hideSidebar}
            children='close'
          />
        </div>

        <div className={styles.Links}>
          <Link 
            className={styles.Link} 
            onClick={hideSidebar} 
            children='Home'
            to='/'
          />
          
          <Link 
            className={styles.Link} 
            onClick={hideSidebar} 
            children='About'
            to='/about'
          />

          <Link 
            className={styles.Link} 
            onClick={hideSidebar} 
            children='Contacts'
            to='/contacts'
          />
        </div>
      </div> 
    </div>
  )
}

export { Menu }