import { useRef, useState } from 'react'

import koLocale from '@fullcalendar/core/locales/ko'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import clsx from 'clsx'
import { Calendar, ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '~/components/ui/input-group'
import EventContentItem from '~/routes/main/schedule/components/event-content-item'
import LegendSchedule from '~/routes/main/schedule/components/legend-schedule'
import { eScheduleCalendarStatus } from '~/shared/enums'

const CalendarSchedule = () => {
  const calendarRef = useRef<FullCalendar>(null)
  const [title, setTitle] = useState('')
  const _DATA = [
    {
      time: '09:00',
      start: '2026-06-08',
      scheduleCalendarStatus: eScheduleCalendarStatus.Consultation,
      name: '서민정 님'
    },
    {
      start: '2026-06-08',
      time: '10:00',
      scheduleCalendarStatus: eScheduleCalendarStatus.Reservation,
      name: '서민정 님'
    },
    {
      start: '2026-06-09',
      time: '11:00',
      scheduleCalendarStatus: eScheduleCalendarStatus.CheckIn,
      name: '서민정 님'
    },
    {
      start: '2026-06-09',
      time: '12:00',
      scheduleCalendarStatus: eScheduleCalendarStatus.CheckOut,
      name: '서민정 님'
    }
  ]
  return (
    <section className='w-full h-full lg:h-[calc(100dvh-var(--spacing-height-header))] overflow-y-visible lg:overflow-y-auto p-6'>
      <section className='max-w-mw mx-auto'>
        <section className='flex items-center justify-between flex-wrap gap-5'>
          <section className='flex items-center gap-5'>
            <section className='flex items-center gap-10'>
              <Button variant='outline' onClick={() => calendarRef.current?.getApi().prev()} className='w-13.5 h-13.5'>
                <ChevronLeft />
              </Button>
              <p>{title}</p>
              <Button variant='outline' onClick={() => calendarRef.current?.getApi().next()} className='w-13.5 h-13.5'>
                <ChevronRight />
              </Button>
            </section>
            <Button
              variant='outline'
              onClick={() => calendarRef.current?.getApi().today()}
              className='bg-blue-700 text-white h-13.5 hover:bg-blue-600 hover:text-white'
            >
              <Calendar className='size-4' />
              오늘
            </Button>
          </section>
          <section className='w-full sm:w-auto'>
            <InputGroup className='w-full sm:w-90 h-13.5 rounded-[9.5px] bg-[#f3f3f5] border-none px-2'>
              <InputGroupInput placeholder='이름으로 검색' autoComplete='off' />
              <InputGroupAddon>
                <Search className='size-5 text-[#99A1AF]' />
              </InputGroupAddon>
            </InputGroup>
          </section>
        </section>
        <FullCalendar
          ref={calendarRef}
          locale={koLocale}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          editable
          selectable
          events={_DATA}
          datesSet={(arg) => {
            setTitle(arg.view.title)
          }}
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
          eventClick={(info) => {
            console.log(info.event)
          }}
          headerToolbar={{
            left: '',
            center: '',
            right: ''
          }}
        />
        {/* Legend */}
        <LegendSchedule />
      </section>
    </section>
  )
}

export default CalendarSchedule
