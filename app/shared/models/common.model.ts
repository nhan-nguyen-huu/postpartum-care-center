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
