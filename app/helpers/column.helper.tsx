import type { ColumnDef } from '@tanstack/react-table'
import type { TFunction } from 'i18next'
import ContentBody from '~/components/tables/content-body'
import TitleHead from '~/components/tables/title-head'
import { Button } from '~/components/ui/button'
import { DATE_FORMAT_DOT, commonHelper, dateHelper } from '~/helpers'
import { useTransferEnum } from '~/hooks'
import { eMembershipSummaryStatus, eMembershipTableKey, eSearchAddressTableKey } from '~/shared/enums'

const columnHelper = {
  getColumnsSelectAddressTable: (t: TFunction) => {
    const columns: ColumnDef<unknown>[] = [
      {
        accessorKey: eSearchAddressTableKey.RoadAddr,
        header: () => {
          return <TitleHead title={t('table.searchAddressTableKey.roadAddr')} />
        },
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eSearchAddressTableKey.RoadAddr)} />
        },
        size: 300
      },
      {
        accessorKey: eSearchAddressTableKey.ZipCode,
        header: () => {
          return <TitleHead title={t('table.searchAddressTableKey.zipCode')} />
        },
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eSearchAddressTableKey.ZipCode)} />
        },
        size: 80
      }
    ]
    return columns
  },
  getColumnsMembershipTable: (t: TFunction) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { getTranslateEnum } = useTransferEnum()
    const columns: ColumnDef<unknown>[] = [
      {
        accessorKey: eMembershipTableKey.Name,
        header: () => {
          return <TitleHead title={t('table.membershipTableKey.name')} />
        },
        cell: ({ row }) => {
          const dataRow: any = row?.original
          return (
            <section className='flex flex-col gap-1'>
              <p>{dataRow?.name}</p>
              <p>{dateHelper.formatDate(dataRow?.date, DATE_FORMAT_DOT)} </p>
            </section>
          )
        },
        size: 100
      },
      {
        accessorKey: eMembershipTableKey.Contact,
        header: () => {
          return <TitleHead title={t('table.membershipTableKey.contact')} />
        },
        cell: ({ row }) => {
          const dataRow: any = row?.original
          return <ContentBody content={commonHelper.formatPhoneNumberInput(dataRow?.contact)?.formatted} />
        },
        size: 100
      },
      {
        accessorKey: eMembershipTableKey.Package,
        header: () => {
          return <TitleHead title={t('table.membershipTableKey.package')} />
        },
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eMembershipTableKey.Package)} />
        },
        size: 100
      },
      {
        accessorKey: eMembershipTableKey.Status,
        header: () => {
          return <TitleHead title={t('table.membershipTableKey.status')} />
        },
        cell: ({ row }) => {
          return (
            <ContentBody
              content={getTranslateEnum(
                'membershipSummaryStatus',
                eMembershipSummaryStatus,
                row.getValue(eMembershipTableKey.Status)
              )}
            />
          )
        },
        size: 100
      },
      {
        accessorKey: eMembershipTableKey.RoomNumber,
        header: () => {
          return <TitleHead title={t('table.membershipTableKey.roomNumber')} />
        },
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eMembershipTableKey.RoomNumber)} />
        },
        size: 100
      },
      {
        accessorKey: eMembershipTableKey.Contract,
        header: () => {
          return <TitleHead title={t('table.membershipTableKey.contract')} />
        },
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eMembershipTableKey.Contract)} />
        },
        size: 100
      },
      {
        accessorKey: eMembershipTableKey.RemainingAmount,
        header: () => {
          return <TitleHead title={t('table.membershipTableKey.remainingAmount')} />
        },
        cell: ({ row }) => {
          return (
            <ContentBody
              content={commonHelper.formatKoreaMoney(row.getValue(eMembershipTableKey.RemainingAmount), 'character')}
            />
          )
        },
        size: 100
      },
      {
        accessorKey: eMembershipTableKey.Action,
        header: () => {
          return <TitleHead title={t('table.membershipTableKey.action')} />
        },
        cell: ({}) => {
          return <Button>상세보기</Button>
        },
        size: 100
      }
    ]
    return columns
  }
}

export default columnHelper
