import { useTransferEnum } from '~/hooks'
import { eScheduleCalendarStatus } from '~/shared/enums'

interface IEventContentItemProps {
  scheduleCalendarStatus?: string
  time?: string
  name?: string
}
const EventContentItem = ({ scheduleCalendarStatus, time, name }: IEventContentItemProps) => {
  const { getTranslateEnum } = useTransferEnum()
  return (
    <section className='flex flex-col gap-2 text-black!'>
      <article className='flex items-center gap-2'>
        <p className='bg-primary rounded-full text-white py-0.5 px-3'>
          {getTranslateEnum('scheduleCalendarStatus', eScheduleCalendarStatus, scheduleCalendarStatus)}
        </p>
        <p className='text-gray-500'>{time}</p>
      </article>
      <p>{name}</p>
    </section>
  )
}

export default EventContentItem
