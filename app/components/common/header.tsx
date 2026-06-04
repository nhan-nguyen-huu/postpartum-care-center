import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { Button } from '~/components/ui/button'
import cookieHelper from '~/helpers/cookie.helper'
import { AuthService } from '~/services'
import { ROUTES } from '~/shared/constants'
import useGlobalLoaderStore from '~/stores/global-loader'

const Header = () => {
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
    <section className='bg-primary p-5 flex items-center justify-between'>
      <p className='size-12.5 bg-white rounded-full'></p>
      <Button className='bg-white text-primary hover:bg-white! cursor-pointer' onClick={handleLogout}>
        <span>Logout</span>
        <LogOut />
      </Button>
    </section>
  )
}

export default Header
