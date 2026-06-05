import { Calendar } from 'lucide-react'
import Logout from '~/components/common/logout'
import Menu from '~/components/common/menu'

const Header = () => {
  return (
    <section className='p-5 flex items-center justify-between shadow-sm sticky z-50 top-0 w-full bg-white'>
      <section className='flex items-center gap-2'>
        <button className='bg-blue-600 rounded-[10px] p-2'>
          <Calendar className='text-white size-5' />
        </button>
        <p className='text-sm'>산후조리원 관리</p>
      </section>
      <section className='flex items-center gap-2'>
        <Menu />
        <Logout />
      </section>
    </section>
  )
}

export default Header
