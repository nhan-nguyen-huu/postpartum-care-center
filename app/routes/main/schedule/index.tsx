import CalendarSchedule from '~/routes/main/schedule/components/calendar-schedule'
import SummarySchedule from '~/routes/main/schedule/components/summary-schedule'
import type { IRouteHandle } from '~/shared/models'

export const handle: IRouteHandle = {
  name: 'Schedule'
}

const SchedulePage = () => {
  return (
    <section className='flex h-[calc(100dvh-var(--spacing-height-header))] overflow-y-hidden'>
      <SummarySchedule />
      <CalendarSchedule />
    </section>
  )
}

export default SchedulePage
