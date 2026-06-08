import { Download, Eye, File, PyramidIcon, Send, SquareCheckIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { commonHelper } from '~/helpers'

import ContractStatus from '../contract-status'

interface IContractItemProps {
  data?: any
}
const ContractItem = ({ data }: IContractItemProps) => {
  return (
    <section className='flex items-center gap-5 p-6 rounded-[8px] border border-input shadow'>
      <section className='flex flex-col gap-5 flex-1'>
        <section className='flex items-center gap-2'>
          <button className='bg-blue-50 rounded-2x p-3 rounded'>
            <File className='size-4 text-blue-600' />
          </button>
          <article className='flex flex-col gap-2'>
            <p>김지은 님</p>
            <p>{commonHelper.formatPhoneNumberInput('01034544444')?.formatted}</p>
          </article>
        </section>
        <section className='flex items-center gap-2'>
          <section className='flex-1'>
            <p className='text-sm'>생년월일</p>
            <p className='text-sm font-semibold'>1900-05-15</p>
          </section>
          <section className='flex-1'>
            <p className='text-sm'>패키지</p>
            <p className='text-sm font-semibold'>2주 프리미엄 패키지</p>
          </section>
        </section>
        <section className='bg-gray-100 rounded p-3'>
          <article className='flex items-center gap-2'>
            <SquareCheckIcon className='size-6' />
            <ContractStatus status={data?.status} />
          </article>
        </section>
      </section>
      <section className='flex flex-col gap-5'>
        <Button className='bg-white border border-input text-black'>
          <Eye className='size-4' />
          <span>미리보기</span>
        </Button>
        <Button className='bg-white border border-input text-black'>
          <Download className='size-4' />
          <span>PDF 다운로드</span>
        </Button>
        <Button className='bg-white border border-input text-black'>
          <Send className='size-4' />
          <span>재발송</span>
        </Button>
        <Button className='bg-white border border-input text-black'>
          <PyramidIcon className='size-4' />
          <span>결제하기</span>
        </Button>
      </section>
    </section>
  )
}

export default ContractItem
