import clsx from 'clsx'
import { useTransferEnum } from '~/hooks'
import { eScheduleStatus } from '~/shared/enums'

interface IScheduleStatusProps {
  status: eScheduleStatus
  className?: string
}
const ScheduleStatus = ({ status, className }: IScheduleStatusProps) => {
  const { getTranslateEnum } = useTransferEnum()
  const classNameVariant: Record<eScheduleStatus, string> = {
    [eScheduleStatus.Consultation]: 'bg-[#fff085] text-[#733e0a]',
    [eScheduleStatus.Reservation]: 'bg-[#ffc9c9] text-[#82181a]',
    [eScheduleStatus.CheckIn]: 'bg-[#b9f8cf] text-[#0d542b]',
    [eScheduleStatus.CheckOut]: 'bg-[#bedbff] text-[#1c398e]'
  }
  return (
    <span className={clsx('p-2 rounded-[8px] py-1 px-3', classNameVariant[status], className)}>
      {getTranslateEnum('scheduleStatus', eScheduleStatus, status)}
    </span>
  )
}

export default ScheduleStatus
