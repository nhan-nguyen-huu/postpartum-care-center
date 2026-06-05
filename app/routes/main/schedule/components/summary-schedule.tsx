import { User } from 'lucide-react'
import { commonHelper } from '~/helpers'

const SummarySchedule = () => {
  const _DATA = [
    {
      icon: User,
      title: '오늘 입실',
      amount: commonHelper.formatKoreaMoney(0, 'character')
    },
    {
      icon: User,
      title: '오늘 퇴실',
      amount: commonHelper.formatKoreaMoney(0, 'character')
    },
    {
      icon: User,
      title: '오늘 상담',
      amount: commonHelper.formatKoreaMoney(0, 'character')
    },
    {
      icon: User,
      title: '오늘 예약',
      amount: commonHelper.formatKoreaMoney(0, 'character')
    }
  ]
  return (
    <section className='w-90 p-6 flex flex-col gap-6 h-[calc(100dvh-76px)] overflow-y-auto border border-input bg-white'>
      <p className='text-sm'>오늘 일정 요약</p>
      <section className='flex flex-col gap-6'>
        {_DATA.map((d, idx) => {
          return (
            <section key={idx} className='flex items-center gap-3 border border-primary p-5 rounded-[8px]'>
              <section className='bg-primary rounded-[8px] p-2'>
                <d.icon className='text-white' />
              </section>
              <section className='flex flex-col gap-2'>
                <p className='text-sm'>{d?.title}</p>
                <p className='text-sm'>{d?.amount}</p>
              </section>
            </section>
          )
        })}
      </section>
    </section>
  )
}

export default SummarySchedule
