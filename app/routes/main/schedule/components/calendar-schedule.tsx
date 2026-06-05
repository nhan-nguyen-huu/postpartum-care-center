import { useEffect, useState } from 'react'

import koLocale from '@fullcalendar/core/locales/ko'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

const CalendarSchedule = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <>
      {mounted ? (
        <section className='w-full h-[calc(100dvh-76px)] overflow-y-auto p-6'>
          <section className='max-w-360 mx-auto'>
            <FullCalendar
              locale={koLocale}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView='dayGridMonth'
              editable
              selectable
              events={[
                {
                  title: '정미영 님날짜',
                  start: '2026-06-05'
                }
              ]}
            />
          </section>
        </section>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default CalendarSchedule
