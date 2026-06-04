import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

import { ROUTES } from './shared/constants'

export default [
  // Main
  route(ROUTES.HOME, 'layouts/main-layout.tsx', [index('routes/main/home/index.tsx')]),

  // Auth
  layout('layouts/auth-layout.tsx', [
    // Login
    route(ROUTES.AUTH.LOGIN, 'routes/auth/login/index.tsx')
  ])
] satisfies RouteConfig
