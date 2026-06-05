import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

import { ROUTES } from './shared/constants'

export default [
  // Main
  route(ROUTES.MAIN.HOME, 'layouts/main-layout.tsx', [
    index('routes/main/home/index.tsx'),
    route(ROUTES.MAIN.SCHEDULE, 'routes/main/schedule/index.tsx'),
    route(ROUTES.MAIN.CONTRACT, 'routes/main/contract/index.tsx')
  ]),

  // Auth
  layout('layouts/auth-layout.tsx', [
    // Login
    route(ROUTES.AUTH.LOGIN, 'routes/auth/login/index.tsx')
  ]),

  // Not found
  route('*', 'routes/not-found.tsx')
] satisfies RouteConfig
