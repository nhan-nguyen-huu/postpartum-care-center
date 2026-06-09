import ScheduleStatus from '~/routes/main/schedule/components/schedule-status'
import type { eScheduleStatus } from '~/shared/enums'

interface IEventContentItemProps {
  scheduleStatus: eScheduleStatus
  time?: string
  name?: string
}
const EventContentItem = ({ scheduleStatus, time, name }: IEventContentItemProps) => {
  return (
    <section className='flex flex-col gap-2 text-black!'>
      <article className='flex items-center gap-2'>
        <ScheduleStatus status={scheduleStatus} />
        <p className='text-gray-500'>{time}</p>
      </article>
      <p>{name}</p>
    </section>
  )
}

export default EventContentItem
