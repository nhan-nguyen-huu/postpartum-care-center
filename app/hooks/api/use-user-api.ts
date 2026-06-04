import { type UseQueryOptions, useQuery } from '@tanstack/react-query'
import { UserService } from '~/services'
import { QUERY_KEY } from '~/shared/constants'
import type { IUser } from '~/shared/models'

type UseProfileApiQueryOptions = Omit<UseQueryOptions<IUser>, 'queryKey' | 'queryFn'>
export const useProfileApi = (options?: UseProfileApiQueryOptions) => {
  return useQuery({
    queryKey: [QUERY_KEY.USER.PROFILE],
    queryFn: async () => {
      const res = await UserService.GetProfile()
      const data = res?.result?.data
      if (!data) {
        throw new Error('Error')
      }
      return data
    },
    ...options
  })
}
