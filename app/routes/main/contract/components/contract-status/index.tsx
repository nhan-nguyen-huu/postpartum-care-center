import clsx from 'clsx'
import { useTransferEnum } from '~/hooks'
import { eContractStatus } from '~/shared/enums'

interface IContractStatusProps {
  status: eContractStatus
}

const ContractStatus = ({ status }: IContractStatusProps) => {
  const { getTranslateEnum } = useTransferEnum()
  const classVariant: Record<eContractStatus, string> = {
    [eContractStatus.Signed]: 'bg-green-500',
    [eContractStatus.Sent]: 'bg-blue-500'
  }
  return (
    <button className={clsx('rounded-full py-1 px-2 text-white', classVariant[status])}>
      {getTranslateEnum('contractStatus', eContractStatus, status)}
    </button>
  )
}

export default ContractStatus
