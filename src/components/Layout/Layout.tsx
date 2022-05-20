import { FC } from 'react'
import { Header } from '../Header/Header'
import { Footer } from './../Footer/Footer'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Header}>
        <Header />
      </div>
      <div className={styles.Outlet}>
        <Outlet />
      </div>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  )
}

export { Layout }