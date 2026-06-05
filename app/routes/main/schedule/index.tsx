import CalendarSchedule from '~/routes/main/schedule/components/calendar-schedule'
import SummarySchedule from '~/routes/main/schedule/components/summary-schedule'

const SchedulePage = () => {
  return (
    <section className='flex h-[calc(100dvh-76px)] overflow-y-hidden'>
      <SummarySchedule />
      <CalendarSchedule />
    </section>
  )
}

export default SchedulePage
