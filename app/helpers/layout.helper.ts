import type { TFunction } from 'i18next'
import { Bell, Calendar, File, MessageCircle, User } from 'lucide-react'
import { ROUTES } from '~/shared/constants'

export const layoutHelper = {
  getMenu: (t: TFunction) => {
    return [
      {
        icon: Calendar,
        name: t('menu.schedule'),
        url: ROUTES.MAIN.SCHEDULE
      },
      {
        icon: File,
        name: t('menu.contract'),
        url: ROUTES.MAIN.CONTRACT
      },
      {
        icon: Calendar,
        name: t('menu.payment'),
        url: ROUTES.MAIN.PAYMENT
      },
      {
        icon: Calendar,
        name: t('menu.roomStatus'),
        url: ROUTES.MAIN.ROOM_STATUS
      },
      {
        icon: User,
        name: t('menu.membership'),
        url: ROUTES.MAIN.MEMBERSHIP
      },
      {
        icon: MessageCircle,
        name: t('menu.maternity'),
        url: ROUTES.MAIN.MATERNITY
      },
      {
        icon: Bell,
        name: t('menu.sendNotification'),
        url: ROUTES.MAIN.SEND_NOTIFICATION
      },
      {
        icon: Calendar,
        name: t('menu.website'),
        url: ROUTES.MAIN.WEBSITE
      },
      {
        icon: Calendar,
        name: t('menu.settings'),
        url: ROUTES.MAIN.SETTINGS
      }
    ]
  }
}
