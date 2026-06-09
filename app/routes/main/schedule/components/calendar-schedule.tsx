import { useRef, useState } from 'react'

import koLocale from '@fullcalendar/core/locales/ko'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import clsx from 'clsx'
import { Calendar, ChevronLeft, ChevronRight, Search } from 'lucide-react'
import ListScheduleDialog from '~/components/dialogs/list-schedule-dialog'
import ScheduleDetailDialog from '~/components/dialogs/schedule-detail-dialog'
import { Button } from '~/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '~/components/ui/input-group'
import EventContentItem from '~/routes/main/schedule/components/event-content-item'
import LegendSchedule from '~/routes/main/schedule/components/legend-schedule'
import { eScheduleStatus } from '~/shared/enums'
import type { ISchedule } from '~/shared/models'

const CalendarSchedule = () => {
  const calendarRef = useRef<FullCalendar>(null)
  const [openSchedule, setOpenSchedule] = useState(false)
  const [openListSchedule, setOpenListSchedule] = useState(false)
  const [dataSchedule, setDataSchedule] = useState<ISchedule | undefined>(undefined)
  const [dataListSchedule, setDataListSchedule] = useState<ISchedule[]>([])
  const [title, setTitle] = useState('')
  const _DATA: ISchedule[] = [
    {
      time: '09:00',
      start: '2026-06-08',
      scheduleStatus: eScheduleStatus.Consultation,
      name: 'Mr. Nguyen'
    },
    {
      start: '2026-06-08',
      time: '10:00',
      scheduleStatus: eScheduleStatus.Reservation,
      name: 'Mr. Huu'
    },
    {
      time: '11:00',
      start: '2026-06-08',
      scheduleStatus: eScheduleStatus.CheckIn,
      name: 'Mr. Nhan'
    },
    {
      start: '2026-06-08',
      time: '12:00',
      scheduleStatus: eScheduleStatus.CheckOut,
      name: 'Mr. Hoa'
    },
    {
      start: '2026-06-09',
      time: '11:00',
      scheduleStatus: eScheduleStatus.CheckIn,
      name: 'Nhan'
    },
    {
      start: '2026-06-09',
      time: '12:00',
      scheduleStatus: eScheduleStatus.CheckOut,
      name: 'Hoa'
    }
  ]
  const handleAction = (data?: ISchedule) => {
    setDataSchedule(data)
    setOpenListSchedule(false)
    setOpenSchedule(true)
  }
  return (
    <>
      <section className='w-full h-full lg:h-[calc(100dvh-var(--spacing-height-header))] overflow-y-visible lg:overflow-y-auto p-6'>
        <section className='max-w-mw mx-auto'>
          <section className='flex items-center justify-between flex-wrap gap-5'>
            <section className='flex items-center gap-5'>
              <section className='flex items-center gap-10'>
                <Button
                  variant='outline'
                  onClick={() => calendarRef.current?.getApi().prev()}
                  className='w-13.5 h-13.5'
                >
                  <ChevronLeft />
                </Button>
                <p>{title}</p>
                <Button
                  variant='outline'
                  onClick={() => calendarRef.current?.getApi().next()}
                  className='w-13.5 h-13.5'
                >
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
            editable={false}
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
            dayMaxEvents={3}
            contentHeight='auto'
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
              const status = arg.event.extendedProps.scheduleStatus
              switch (status) {
                case eScheduleStatus.Consultation:
                  return ['status-consultation']
                case eScheduleStatus.Reservation:
                  return ['status-reservation']
                case eScheduleStatus.CheckIn:
                  return ['status-checkin']
                case eScheduleStatus.CheckOut:
                  return ['status-checkout']
                default:
                  return []
              }
            }}
            eventContent={(arg) => {
              const { scheduleStatus, time, name } = arg.event.extendedProps
              return <EventContentItem scheduleStatus={scheduleStatus} time={time} name={name} />
            }}
            eventClick={(info) => {
              setDataSchedule(info.event.extendedProps)
              setOpenSchedule(true)
            }}
            moreLinkClick={(arg) => {
              const clickedDate = arg.date.toISOString().split('T')[0]
              const events =
                calendarRef.current
                  ?.getApi()
                  .getEvents()
                  .filter((event) => {
                    return event.startStr.startsWith(clickedDate)
                  })
                  .map((event) => ({
                    title: event.title,
                    ...event.extendedProps
                  })) ?? []
              setDataListSchedule(events as ISchedule[])
              setOpenListSchedule(true)
              return 'none'
            }}
            dateClick={(info) => {
              const events =
                calendarRef.current
                  ?.getApi()
                  .getEvents()
                  .filter((event) => event.startStr.startsWith(info.dateStr)) ?? []
              if (!events?.length) {
                setDataListSchedule([])
                setOpenListSchedule(true)
              }
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

      {/* Dialog */}
      <ScheduleDetailDialog open={openSchedule} setOpen={setOpenSchedule} data={dataSchedule} />
      <ListScheduleDialog
        open={openListSchedule}
        setOpen={setOpenListSchedule}
        data={dataListSchedule}
        onAction={handleAction}
      />
    </>
  )
}

export default CalendarSchedule
