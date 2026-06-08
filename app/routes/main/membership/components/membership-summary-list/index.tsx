import type { PropsWithChildren } from 'react'

const MembershipSummaryList = ({ children }: PropsWithChildren) => {
  return <section className='flex items-center gap-5'>{children}</section>
}

export default MembershipSummaryList
