import type { PropsWithChildren } from 'react'

const ListContract = ({ children }: PropsWithChildren) => {
  return <section className='flex flex-col gap-4 p-6 rounded-[8px] border border-input shadow'>{children}</section>
}

export default ListContract
