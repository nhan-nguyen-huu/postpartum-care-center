import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

import { ROUTES } from './shared/constants'

export default [
  // Main
  route(ROUTES.MAIN.HOME, 'layouts/main-layout.tsx', [
    index('routes/main/home/index.tsx'),
    route(ROUTES.MAIN.SCHEDULE, 'routes/main/schedule/index.tsx'),
    route(ROUTES.MAIN.CONTRACT, 'routes/main/contract/index.tsx'),
    route(ROUTES.MAIN.PAYMENT, 'routes/main/payment/index.tsx'),
    route(ROUTES.MAIN.ROOM_STATUS, 'routes/main/room-status/index.tsx'),
    route(ROUTES.MAIN.MEMBERSHIP, 'routes/main/membership/index.tsx'),
    route(ROUTES.MAIN.MATERNITY, 'routes/main/maternity/index.tsx'),
    route(ROUTES.MAIN.SEND_NOTIFICATION, 'routes/main/send-notification/index.tsx'),
    route(ROUTES.MAIN.WEBSITE, 'routes/main/website/index.tsx'),
    route(ROUTES.MAIN.SETTINGS, 'routes/main/settings/index.tsx')
  ]),

  // Auth
  layout('layouts/auth-layout.tsx', [
    // Login
    route(ROUTES.AUTH.LOGIN, 'routes/auth/login/index.tsx')
  ]),

  // Not found
  route('*', 'routes/not-found.tsx')
] satisfies RouteConfig
