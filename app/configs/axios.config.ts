import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { toast } from 'sonner'
import cookieHelper from '~/helpers/cookie.helper'
import errorHelper from '~/helpers/error.helper'

const TIMEOUT = 2 * 60 * 1000

let hasShow401Toast = false

const configs: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  },
  timeout: TIMEOUT
}

const axiosClient: AxiosInstance = axios.create(configs)
axiosClient.interceptors.request.use(async (request: InternalAxiosRequestConfig) => {
  const authorization = cookieHelper.getAccessToken()
  if (authorization) {
    request.headers.set('Authorization', `Bearer ${authorization}`)
  }

  return request
})

export const publicAxiosClient: AxiosInstance = axios.create(configs)

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error) => {
    // Error code
    const errorCode = error?.response?.data?.code

    // Message
    const errorMessage = error?.response?.data?.message || errorHelper.getDefaultErrorMessage(errorCode)

    // Errorcode - Unauthorized
    if (error?.status === 401 && !error?.config?.url?.includes('auth/login')) {
      cookieHelper.removeAccessToken()
      if (!hasShow401Toast) {
        hasShow401Toast = true
        toast.error(errorMessage)
        setTimeout(() => {
          window.location.href = '/'
        }, 500)
      }
      return Promise.reject(error?.response?.data)
    }

    // Expect don't show toast
    if ([...errorHelper.getErrorExpect()].includes(errorCode)) {
      return Promise.reject(error?.response?.data)
    }

    // Last case
    toast.error(errorMessage)
    return Promise.reject(error?.response?.data)
  }
)
export default axiosClient
