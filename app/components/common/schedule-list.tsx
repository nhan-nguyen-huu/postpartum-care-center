import clsx from 'clsx'
import { Clock } from 'lucide-react'
import { commonHelper } from '~/helpers'
import ScheduleStatus from '~/routes/main/schedule/components/schedule-status'
import { eScheduleStatus } from '~/shared/enums'
import type { ISchedule } from '~/shared/models'

interface IScheduleListProps {
  data?: ISchedule[]
  onAction?: (data?: ISchedule) => void
}
const ScheduleList = ({ data, onAction }: IScheduleListProps) => {
  const classNameVariant: Record<eScheduleStatus, string> = {
    [eScheduleStatus.Consultation]: 'bg-yellow-50',
    [eScheduleStatus.Reservation]: 'bg-red-50',
    [eScheduleStatus.CheckIn]: 'bg-green-50',
    [eScheduleStatus.CheckOut]: 'bg-blue-50'
  }

  return (
    <section className='flex flex-col gap-4'>
      {data?.map((d, idx) => {
        return (
          <article
            key={idx}
            className={clsx(
              'flex flex-col gap-2 p-3 mr-2 rounded-[8px]',
              classNameVariant[d?.scheduleStatus as eScheduleStatus]
            )}
            onClick={() => onAction?.(d)}
          >
            <section className='flex items-center gap-2'>
              <ScheduleStatus status={d?.scheduleStatus as eScheduleStatus} />
              <section className='flex items-center gap-1'>
                <Clock className='size-3' />
                <p>10:30</p>
              </section>
            </section>
            <p>한지우</p>
            <p>{commonHelper.formatPhoneNumberInput('01089888834')?.formatted}</p>
            <p>2주 패키지 예약</p>
          </article>
        )
      })}
    </section>
  )
}

export default ScheduleList
