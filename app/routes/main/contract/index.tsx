import { Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PaginationCustom from '~/components/customs/pagination-custom'
import TableCustom from '~/components/customs/table-custom'
import { Button } from '~/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '~/components/ui/input-group'
import columnHelper from '~/helpers/column.helper'
import { usePagination } from '~/hooks'

const ContractPage = () => {
  const { t } = useTranslation()
  const { paging, setPage, setSize } = usePagination()

  return (
    <section className='flex flex-col gap-6 p-6'>
      <section className='flex items-center justify-between gap-2 '>
        <article className='flex flex-col gap-2'>
          <p className='text-sm text-[27px]'>계약 관리</p>
          <p className='text-sm text-[18px]'>전자 계약서를 작성하고 발송할 수 있습니다</p>
        </article>
        <Button className='bg-black p-4 rounded-[8px] h-14'>+ 새 계약서 작성</Button>
      </section>
      <section className='p-6 rounded-[8px] border border-input shadow'>
        <InputGroup className='h-10.5'>
          <InputGroupAddon>
            <Search className='size-5 text-[#99A1AF]' />
          </InputGroupAddon>
          <InputGroupInput placeholder='산모명, 전화번호, 패키지명으로 검색...' autoComplete='off' />
        </InputGroup>
      </section>
      {/* Table */}
      <section className='flex flex-col gap-5'>
        <TableCustom
          loading={false}
          columns={columnHelper.getColumnsSelectAddressTable(t)}
          data={[
            {
              roadAddr: 'A',
              zipCode: 'B'
            },
            {
              roadAddr: 'A',
              zipCode: 'B'
            },
            {
              roadAddr: 'A',
              zipCode: 'B'
            },
            {
              roadAddr: 'A',
              zipCode: 'B'
            }
          ]}
          emptyText={t('empty.noData')}
        />
        <PaginationCustom
          page={paging?.page}
          totalPage={200}
          onPageChange={setPage}
          pageSize={paging?.size}
          onPageSizeChange={setSize}
        />
      </section>
    </section>
  )
}

export default ContractPage
