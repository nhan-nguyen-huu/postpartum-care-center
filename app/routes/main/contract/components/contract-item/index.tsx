import { CopyIcon } from 'lucide-react'
import { commonHelper } from '~/helpers'

interface IContractItemProps {
  data?: unknown
}
const ContractItem = ({ data }: IContractItemProps) => {
  console.log('DATA: ', data)
  return (
    <section className='flex items-center gap-5'>
      <section className='flex flex-col gap-5'>
        <section className='flex items-center gap-2'>
          <button className='bg-blu rounded-2x p-3 rounded'>
            <CopyIcon className='size-4 text-blue-600' />
          </button>
          <article className='flex flex-col gap-2'>
            <p>김지은 님</p>
            <p>{commonHelper.formatPhoneNumberInput('01034544444')?.formatted}</p>
          </article>
        </section>
      </section>
    </section>
  )
}

export default ContractItem
