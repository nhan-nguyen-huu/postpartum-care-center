import { redirect } from 'react-router'
import { ROUTES } from '~/shared/constants'
import type { ProtectedType } from '~/shared/types'

import cookieHelper from './cookie.helper'

export const authHelper = {
  handleProtectedRoute: (type: ProtectedType) => {
    const token = cookieHelper.getAccessToken()
    switch (type) {
      case 'ROOT':
        console.log('ROOT')
        return !token ? redirect(ROUTES.AUTH.LOGIN) : null
      case 'AUTH_ONLY':
        return token ? redirect(ROUTES.HOME) : null
      case 'PRIVATE':
        return !token ? redirect(`/${ROUTES.AUTH.LOGIN}`) : null
    }
  }
}
