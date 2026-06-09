import clsx from 'clsx'
import { commonHelper } from '~/helpers'
import { eMembershipSummaryStatus } from '~/shared/enums'

interface IMembershipSummaryItemProps {
  title?: string
  amount?: number
  membershipSummaryStatus: eMembershipSummaryStatus
}
const MembershipSummaryItem = ({ title, amount, membershipSummaryStatus }: IMembershipSummaryItemProps) => {
  const classNameVariant: Record<eMembershipSummaryStatus, string> = {
    [eMembershipSummaryStatus.AllMembers]: 'border-input bg-background',
    [eMembershipSummaryStatus.CurrentlyCheckedIn]: 'border-green-500 bg-green-50 text-green-500',
    [eMembershipSummaryStatus.WaitingForReservation]: 'border-yellow-500 bg-yellow-50 text-yellow-500',
    [eMembershipSummaryStatus.CheckedOutComplete]: 'border-blue-500 bg-blue-50 text-blue-500'
  }
  return (
    <section
      className={clsx('flex flex-col gap-2 flex-1 p-4 rounded-[8px] border', classNameVariant[membershipSummaryStatus])}
    >
      <p>{title}</p>
      <p className='font-medium text-[25px]'>{commonHelper.formatKoreaMoney(amount, 'character')}</p>
    </section>
  )
}

export default MembershipSummaryItem
