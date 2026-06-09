import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

const LegendSchedule = () => {
  const { t } = useTranslation()
  const _DATA = [
    {
      className: 'bg-[#fff085]',
      name: t('enums.scheduleStatus.consultation')
    },
    {
      className: 'bg-[#ffc9c9]',
      name: t('enums.scheduleStatus.reservation')
    },
    {
      className: 'bg-[#b9f8cf]',
      name: t('enums.scheduleStatus.checkIn')
    },
    {
      className: 'bg-[#bedbff]',
      name: t('enums.scheduleStatus.checkOut')
    }
  ]
  return (
    <section className='mt-6.25 flex items-center justify-center gap-8'>
      {_DATA.map((d) => {
        return (
          <section key={d.className} className='flex items-center gap-2'>
            <p className={clsx('size-6 rounded', d?.className)}></p>
            <p>{d.name}</p>
          </section>
        )
      })}
    </section>
  )
}

export default LegendSchedule
