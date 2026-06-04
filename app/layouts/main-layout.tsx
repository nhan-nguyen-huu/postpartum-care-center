import { Outlet } from 'react-router'
import Header from '~/components/common/header'
import { authHelper } from '~/helpers'

export const clientLoader = () => authHelper.handleProtectedRoute('ROOT')

export function HydrateFallback() {
  return <p></p>
}

const MainLayout = () => {
  return (
    <section className='flex flex-col'>
      <Header />
      <Outlet />
    </section>
  )
}

export default MainLayout
