import clsx from 'clsx'
import { Outlet, type UIMatch, useMatches } from 'react-router'
import Header from '~/components/common/header'
import { authHelper } from '~/helpers'
import i18n from '~/lib/i18n'
import type { IRouteHandle } from '~/shared/models'

export function meta() {
  const t = i18n.t.bind(i18n)
  return [{ title: t('meta.title') }, { name: 'Welcome', content: 'Welcome' }]
}

export const clientLoader = () => authHelper.handleProtectedRoute('ROOT')

const MainLayout = () => {
  const matches = useMatches() as UIMatch<undefined, IRouteHandle>[]
  const isSchedule = [...matches].reverse().find((m) => m.handle)?.pathname === '/schedule'
  return (
    <section className='flex flex-col'>
      <Header />
      <section className={clsx(!isSchedule && 'w-full max-w-mw mx-auto')}>
        <Outlet />
      </section>
    </section>
  )
}

export default MainLayout
