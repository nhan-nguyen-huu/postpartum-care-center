import { redirect } from 'react-router'
import { ROUTES } from '~/shared/constants'
import type { ProtectedType } from '~/shared/types'

import cookieHelper from './cookie.helper'

export const authHelper = {
  // Check protected
  handleProtectedRoute: (type: ProtectedType) => {
    const token = cookieHelper.getAccessToken()
    switch (type) {
      case 'ROOT':
        return !token ? redirect(ROUTES.AUTH.LOGIN) : null
      case 'AUTH_ONLY':
        return token ? redirect(ROUTES.MAIN.HOME) : null
      case 'PRIVATE':
        return !token ? redirect(`/${ROUTES.AUTH.LOGIN}`) : null
    }
  }
}
