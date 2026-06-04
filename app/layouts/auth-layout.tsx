import { Outlet } from 'react-router'
import i18n from '~/lib/i18n'

// export const clientLoader = () => authHelper.handleProtectedRoute('AUTH_ONLY')

export function meta() {
  const t = i18n.t.bind(i18n)
  return [{ title: t('meta.title') }, { name: 'Welcome', content: 'Welcome' }]
}

export function HydrateFallback() {
  return <></>
}

const AuthLayout = () => {
  return <Outlet />
}

export default AuthLayout
