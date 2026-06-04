import axiosClient from '~/configs/axios.config'
import { API_USER } from '~/shared/constants'
import type { IApiResponse, IUser } from '~/shared/models'

export const UserService = {
  GetProfile: async (): Promise<IApiResponse<IUser>> => {
    return await axiosClient.get(API_USER.PROFILE_URL)
  }
}
