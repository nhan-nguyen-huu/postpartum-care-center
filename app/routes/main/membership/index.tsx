import { Search, UserCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Fragment } from 'react/jsx-runtime'
import TableCustom from '~/components/customs/table-custom'
import { Button } from '~/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '~/components/ui/input-group'
import columnHelper from '~/helpers/column.helper'
import MembershipSummaryItem from '~/routes/main/membership/components/membership-summary-item'
import MembershipSummaryList from '~/routes/main/membership/components/membership-summary-list'
import { eMembershipSummaryStatus } from '~/shared/enums'

const MembershipPage = () => {
  const { t } = useTranslation()
  const _DATA = [
    {
      title: '전체 회원',
      amount: 5,
      membershipSummaryStatus: eMembershipSummaryStatus.AllMembers
    },
    {
      title: '현재 입실',
      amount: 2,
      membershipSummaryStatus: eMembershipSummaryStatus.CurrentlyCheckedIn
    },
    {
      title: '예약 대기',
      amount: 2,
      membershipSummaryStatus: eMembershipSummaryStatus.WaitingForReservation
    },
    {
      title: '퇴실 완료',
      amount: 1,
      membershipSummaryStatus: eMembershipSummaryStatus.CheckedOutComplete
    }
  ]
  const _DATA_TABLE = [
    {
      name: '양혜리',
      date: '1990-05-15',
      contact: '01012345678',
      package: '2주 프리미엄 패키지',
      status: eMembershipSummaryStatus.CheckedOutComplete,
      roomNumber: '301호',
      contract: '서명완료',
      remainingAmount: 1000000
    },
    {
      name: '양혜리',
      date: '1990-05-15',
      contact: '01012345678',
      package: '2주 프리미엄 패키지',
      status: eMembershipSummaryStatus.CheckedOutComplete,
      roomNumber: '301호',
      contract: '서명완료',
      remainingAmount: 1000000
    },
    {
      name: '양혜리',
      date: '1990-05-15',
      contact: '01012345678',
      package: '2주 프리미엄 패키지',
      status: eMembershipSummaryStatus.CheckedOutComplete,
      roomNumber: '301호',
      contract: '서명완료',
      remainingAmount: 1000000
    },
    {
      name: '양혜리',
      date: '1990-05-15',
      contact: '01012345678',
      package: '2주 프리미엄 패키지',
      status: eMembershipSummaryStatus.CheckedOutComplete,
      roomNumber: '301호',
      contract: '서명완료',
      remainingAmount: 1000000
    },
    {
      name: '양혜리',
      date: '1990-05-15',
      contact: '01012345678',
      package: '2주 프리미엄 패키지',
      status: eMembershipSummaryStatus.CheckedOutComplete,
      roomNumber: '301호',
      contract: '서명완료',
      remainingAmount: 1000000
    },
    {
      name: '양혜리',
      date: '1990-05-15',
      contact: '01012345678',
      package: '2주 프리미엄 패키지',
      status: eMembershipSummaryStatus.CheckedOutComplete,
      roomNumber: '301호',
      contract: '서명완료',
      remainingAmount: 1000000
    },
    {
      name: '양혜리',
      date: '1990-05-15',
      contact: '01012345678',
      package: '2주 프리미엄 패키지',
      status: eMembershipSummaryStatus.CheckedOutComplete,
      roomNumber: '301호',
      contract: '서명완료',
      remainingAmount: 1000000
    }
  ]
  return (
    <section className='flex flex-col gap-6 p-6'>
      <article className='flex flex-col gap-2'>
        <p className='font-semibold text-[20px]'>회원 관리</p>
        <p>산후조리원 이용 고객 정보를 관리합니다</p>
      </article>
      <article className='flex items-center justify-between gap-2 p-4 bg-white rounded border border-input'>
        <InputGroup className='w-full sm:w-125 h-13.5 rounded-[9.5px] bg-[#f3f3f5] border-none px-2'>
          <InputGroupInput placeholder='이름으로 검색' autoComplete='off' />
          <InputGroupAddon>
            <Search className='size-5 text-[#99A1AF]' />
          </InputGroupAddon>
        </InputGroup>
        <Button className='h-13.5 bg-blue-600'>
          <UserCheck className='size-4' />
          <span>신규 회원 등록</span>
        </Button>
      </article>
      <MembershipSummaryList>
        {_DATA.map((d) => {
          return (
            <Fragment key={d?.title}>
              <MembershipSummaryItem
                title={d?.title}
                amount={d?.amount}
                membershipSummaryStatus={d?.membershipSummaryStatus}
              />
            </Fragment>
          )
        })}
      </MembershipSummaryList>

      <TableCustom
        loading={false}
        columns={columnHelper.getColumnsMembershipTable(t)}
        data={_DATA_TABLE}
        emptyText={t('empty.noData')}
      />
    </section>
  )
}

export default MembershipPage
