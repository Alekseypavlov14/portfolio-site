import { FC } from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export { Layout }