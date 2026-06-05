import { Outlet } from 'react-router'
import Header from '~/components/common/header'
import { authHelper } from '~/helpers'
import i18n from '~/lib/i18n'

export function meta() {
  const t = i18n.t.bind(i18n)
  return [{ title: t('meta.title') }, { name: 'Welcome', content: 'Welcome' }]
}

export const clientLoader = () => authHelper.handleProtectedRoute('ROOT')

const MainLayout = () => {
  return (
    <section className='flex flex-col'>
      <Header />
      <Outlet />
    </section>
  )
}

export default MainLayout
