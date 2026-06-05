import type { ColumnDef } from '@tanstack/react-table'
import type { TFunction } from 'i18next'
import ContentBody from '~/components/tables/content-body'
import TitleHead from '~/components/tables/title-head'
import { eSearchAddressTableKey } from '~/shared/enums'

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
  }
}

export default columnHelper
