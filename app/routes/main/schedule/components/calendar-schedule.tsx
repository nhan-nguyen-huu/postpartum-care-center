import { useRef } from 'react'

import koLocale from '@fullcalendar/core/locales/ko'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import clsx from 'clsx'
import EventContentItem from '~/routes/main/schedule/components/event-content-item'
import { eScheduleCalendarStatus } from '~/shared/enums'

const CalendarSchedule = () => {
  const calendarRef = useRef<FullCalendar>(null)
  const _DATA = [
    {
      title: '정미영 님날짜',
      time: '09:00',
      start: '2026-06-08',
      scheduleCalendarStatus: eScheduleCalendarStatus.Consultation,
      name: '서민정 님'
    },
    {
      title: '정미영 님날짜',
      start: '2026-06-08',
      time: '10:00',
      scheduleCalendarStatus: eScheduleCalendarStatus.Reservation,
      name: '서민정 님'
    },
    {
      title: '정미영 님날짜',
      start: '2026-06-09',
      time: '11:00',
      scheduleCalendarStatus: eScheduleCalendarStatus.CheckIn,
      name: '서민정 님'
    },
    {
      title: '정미영 님날짜',
      start: '2026-06-09',
      time: '12:00',
      scheduleCalendarStatus: eScheduleCalendarStatus.CheckOut,
      name: '서민정 님'
    }
  ]
  return (
    <section className='w-full h-full lg:h-[calc(100dvh-var(--spacing-height-header))] overflow-y-visible lg:overflow-y-auto p-6'>
      <section className='max-w-mw mx-auto'>
        <FullCalendar
          ref={calendarRef}
          locale={koLocale}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          editable
          selectable
          events={_DATA}
          dayCellContent={(arg) => {
            const dayOfWeek = arg.date.getDay()
            return (
              <p className={clsx(dayOfWeek === 0 && 'text-red-500', dayOfWeek === 6 && 'text-blue-500')}>
                {arg.dayNumberText.replace('일', '')}
              </p>
            )
          }}
          dayHeaderContent={(arg) => {
            const dayOfWeek = arg.date.getDay()
            return (
              <section
                className={clsx(
                  'p-4 font-medium',
                  dayOfWeek === 0 && 'text-red-500',
                  dayOfWeek === 6 && 'text-blue-500'
                )}
              >
                {arg.text}
              </section>
            )
          }}
          eventClassNames={(arg) => {
            const status = arg.event.extendedProps.scheduleCalendarStatus
            switch (status) {
              case eScheduleCalendarStatus.Consultation:
                return ['status-consultation']
              case eScheduleCalendarStatus.Reservation:
                return ['status-reservation']
              case eScheduleCalendarStatus.CheckIn:
                return ['status-checkin']
              case eScheduleCalendarStatus.CheckOut:
                return ['status-checkout']
              default:
                return []
            }
          }}
          eventContent={(arg) => {
            const { scheduleCalendarStatus, time, name } = arg.event.extendedProps
            return <EventContentItem scheduleCalendarStatus={scheduleCalendarStatus} time={time} name={name} />
          }}
          headerToolbar={{
            left: 'prev,title,next,today',
            center: '',
            right: ''
          }}
        />
      </section>
    </section>
  )
}

export default CalendarSchedule
