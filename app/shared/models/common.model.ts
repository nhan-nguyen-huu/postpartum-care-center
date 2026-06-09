import type { eScheduleStatus } from '~/shared/enums'

export interface IApiPagination {
  content?: []
  page?: number
  size?: number
  totalElements?: number
  totalPages?: number
  last?: boolean
}

export interface IApiResponse<T> {
  result?: boolean
  data?: T
  message?: string
  code?: number | string
}

export interface IRouteHandle {
  name?: string
}

export interface ISchedule {
  time?: string
  start?: string
  scheduleStatus?: eScheduleStatus
  name?: string
}
