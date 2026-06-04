import { useMutation } from '@tanstack/react-query'
import { CalculatorIcon, Calendar, LogOut } from 'lucide-react'
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
  const MENU = [
    {
      name: '일정',
      icon: CalculatorIcon
    },
    {
      name: '계약',
      icon: CalculatorIcon
    },
    {
      name: '결제',
      icon: CalculatorIcon
    },
    {
      name: '룸현황',
      icon: CalculatorIcon
    },
    {
      name: '회원',
      icon: CalculatorIcon
    },
    {
      name: '산모 문의',
      icon: CalculatorIcon
    },
    {
      name: '알림 발송',
      icon: CalculatorIcon
    },
    {
      name: 'CCTV',
      icon: CalculatorIcon
    },
    {
      name: '홈페이지',
      icon: CalculatorIcon
    },
    {
      name: '설정',
      icon: CalculatorIcon
    }
  ]
  return (
    <section className='p-5 flex items-center justify-between shadow-md'>
      <section className='flex items-center gap-'>
        <button className='bg-blue-600 rounded-[10px] p-2'>
          <Calendar className='text-white size-5' />
        </button>
        <p className='text-sm'>산후조리원 관리</p>
      </section>
      <section className='flex items-center gap-1'>
        {MENU.map((m, index) => {
          return (
            <Button
              key={index}
              className='group bg-white hover:bg-blue-600 transition-all duration-200 ease-in cursor-pointer'
            >
              <span className='text-black group-hover:text-white'>{m?.name}</span>
              <m.icon className='size-4 text-black group-hover:text-white' />
            </Button>
          )
        })}
        <Button
          className='bg-white text-blue-600 hover:bg-white! cursor-pointer border border-blue-600'
          onClick={handleLogout}
        >
          <span>Logout</span>
          <LogOut />
        </Button>
      </section>
    </section>
  )
}

export default Header
