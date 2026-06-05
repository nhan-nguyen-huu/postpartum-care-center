import { Navigate } from 'react-router'
import { ROUTES } from '~/shared/constants'

const HomePage = () => {
  return <Navigate to={ROUTES.MAIN.SCHEDULE} replace />
}

export default HomePage
