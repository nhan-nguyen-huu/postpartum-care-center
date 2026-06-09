import dayjs from 'dayjs'
import { Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import RenderIf from '~/components/common/render-if'
import ScheduleList from '~/components/common/schedule-list'
import DialogCustom from '~/components/customs/dialog-custom'
import i18n from '~/lib/i18n'
import type { ISchedule } from '~/shared/models'

interface IListScheduleDialogProps {
  open: boolean
  setOpen: (isOpen: boolean) => void
  data?: ISchedule[]
  onAction?: (data?: ISchedule) => void
}
const ListScheduleDialog = ({ open, setOpen, data, onAction }: IListScheduleDialogProps) => {
  const { t } = useTranslation()
  const formatByLocale = (lang: string) => {
    if (lang === 'ko') return 'YYYY년 M월 D일 (ddd)'
    if (lang === 'en') return 'MMMM D, YYYY (ddd)'
  }
  const handleAction = (data?: ISchedule) => {
    onAction?.(data)
  }
  return (
    <DialogCustom
      open={open}
      onOpenChange={setOpen}
      okText='수정'
      cancelText='닫기'
      classNameWrapperChildrenContent='overflow-y-auto'
      classNameContent='sm:max-w-[600px]'
      headerContent={
        <section className='flex flex-col gap-2'>
          <section className='flex items-center gap-2'>
            <Calendar className='size-5 text-blue-700' />
            <p>{dayjs('10-10-2026').locale(i18n.language).format(formatByLocale(i18n.language))}</p>
          </section>
          <p>이 날짜에 예정된 일정 목록을 확인할 수 있습니다</p>
        </section>
      }
    >
      <RenderIf
        condition={!!data?.length}
        whenTrue={
          <section className='flex flex-col gap-2'>
            <p>{t('common.totalSchedules', { value: 4 })}</p>
            <ScheduleList data={data} onAction={handleAction} />
          </section>
        }
        whenFalse={<p className='text-center h-25 flex items-center justify-center'>이 날짜에는 일정이 없습니다.</p>}
      />
    </DialogCustom>
  )
}

export default ListScheduleDialog
