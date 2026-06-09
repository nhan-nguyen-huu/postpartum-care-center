import clsx from 'clsx'
import dayjs from 'dayjs'
import { Calendar, File, Phone, Timer, User2 } from 'lucide-react'
import { commonHelper } from '~/helpers'
import i18n from '~/lib/i18n'
import { eScheduleStatus } from '~/shared/enums'
import type { ISchedule } from '~/shared/models'

interface IScheduleDetailProps {
  data?: ISchedule
}
const ScheduleDetail = ({ data }: IScheduleDetailProps) => {
  const classNameVariant: Record<eScheduleStatus, string> = {
    [eScheduleStatus.Consultation]: 'bg-yellow-50',
    [eScheduleStatus.Reservation]: 'bg-red-50',
    [eScheduleStatus.CheckIn]: 'bg-green-50',
    [eScheduleStatus.CheckOut]: 'bg-blue-50'
  }
  const formatByLocale = (lang: string) => {
    if (lang === 'ko') return 'YYYY년 M월 D일'
    if (lang === 'en') return 'MMMM D, YYYY'
  }
  const _DATA = [
    {
      icon: User2,
      title: '산모명',
      content: '박정은 님'
    },
    {
      icon: Calendar,
      title: '날짜',
      content: dayjs('10-10-2026').locale(i18n.language).format(formatByLocale(i18n.language))
    },
    {
      icon: Timer,
      title: '시간',
      content: '11:00'
    },
    {
      icon: Phone,
      title: '연락처',
      content: commonHelper.formatPhoneNumberInput('0109389983')?.formatted
    },
    {
      icon: File,
      title: '메모',
      content: '3주 패키지 예약'
    }
  ]
  return (
    <section
      className={clsx(
        'p-6 flex flex-col gap-6 rounded-[8px] overflow-y-auto',
        classNameVariant[data?.scheduleStatus as eScheduleStatus]
      )}
    >
      {_DATA.map((d, idx) => {
        return (
          <section key={idx} className='flex items-center gap-4'>
            <button className='p-3 rounded-[8px] bg-white'>
              <d.icon className='size-4 text-black' />
            </button>
            <article className='flex flex-col gap-1'>
              <p>{d.title}</p>
              <p>{d.content}</p>
            </article>
          </section>
        )
      })}
    </section>
  )
}

export default ScheduleDetail
