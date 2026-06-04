import axiosClient from '~/configs/axios.config'
import { API_AUTH } from '~/shared/constants'
import type { IApiResponse, ILoginPayload, IToken } from '~/shared/models'

export const AuthService = {
  Login: async (payload?: ILoginPayload): Promise<IApiResponse<IToken>> => {
    return await axiosClient.post(API_AUTH.LOGIN_URL, payload)
  },
  Logout: async (refreshToken?: string): Promise<IApiResponse<IToken>> => {
    return await axiosClient.post(API_AUTH.LOGOUT_URL, { refreshToken })
  }
}
