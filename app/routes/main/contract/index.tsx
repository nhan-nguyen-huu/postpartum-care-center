import { Search } from 'lucide-react'
import { Fragment } from 'react/jsx-runtime'
import { Button } from '~/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '~/components/ui/input-group'
import ContractItem from '~/routes/main/contract/components/contract-item'
import ListContract from '~/routes/main/contract/components/list-contract'

const ContractPage = () => {
  const _DATA_CONTRACT = [
    {
      phone: '010938498984',
      date: '2025.11.10'
    }
  ]
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

      {/* List contract */}
      <ListContract>
        {_DATA_CONTRACT.map((c, idx) => {
          return (
            <Fragment key={idx}>
              <ContractItem data={c} />
            </Fragment>
          )
        })}
      </ListContract>
    </section>
  )
}

export default ContractPage
