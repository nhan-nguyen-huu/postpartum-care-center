import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { Button } from '~/components/ui/button'
import cookieHelper from '~/helpers/cookie.helper'
import { AuthService } from '~/services'
import { ROUTES } from '~/shared/constants'
import useGlobalLoaderStore from '~/stores/global-loader'

const Logout = () => {
  const { startLoading, stopLoading } = useGlobalLoaderStore()
  const navi = useNavigate()
  const logoutMutation = useMutation({
    mutationFn: (getRefreshToken?: string) => {
      startLoading()
      return AuthService.Logout(getRefreshToken)
    },
    onSettled: () => {
      stopLoading()
    },
    onSuccess: (res) => {
      const isSuccess = res?.result
      if (isSuccess) {
        cookieHelper.removeAccessToken()
        cookieHelper.removeRefreshToken()
        toast.success('Logout successful!')
        navi(`/${ROUTES.AUTH.LOGIN}`)
      }
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate(cookieHelper.getRefreshToken())
  }
  return (
    <Button
      className='bg-white text-blue-600 hover:bg-white! cursor-pointer border border-blue-600'
      onClick={handleLogout}
    >
      <span>Logout</span>
      <LogOut />
    </Button>
  )
}

export default Logout
