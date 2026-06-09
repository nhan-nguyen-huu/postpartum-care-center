import ScheduleDetail from '~/components/common/schedule-detail'
import DialogCustom from '~/components/customs/dialog-custom'
import ScheduleStatus from '~/routes/main/schedule/components/schedule-status'
import { eScheduleStatus } from '~/shared/enums'
import type { ISchedule } from '~/shared/models'

interface IScheduleDetailDialogProps {
  open: boolean
  setOpen: (isOpen: boolean) => void
  data?: ISchedule
}
const ScheduleDetailDialog = ({ open, setOpen, data }: IScheduleDetailDialogProps) => {
  return (
    <DialogCustom
      open={open}
      onOpenChange={setOpen}
      okText='수정'
      cancelText='닫기'
      classNameWrapperChildrenContent='!max-h-[80vh] overflow-y-auto'
      headerContent={
        <section className='flex items-center gap-2'>
          <ScheduleStatus status={data?.scheduleStatus || eScheduleStatus.CheckIn} />
          <p className='font-semibold text-[20px]'>{data?.name}</p>
        </section>
      }
    >
      <ScheduleDetail data={data} />
    </DialogCustom>
  )
}

export default ScheduleDetailDialog
