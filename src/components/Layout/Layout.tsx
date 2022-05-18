import { FC } from 'react'
import { Header } from '../Header/Header'
import { Footer } from './../Footer/Footer'
import { Outlet } from 'react-router-dom'

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export { Layout }