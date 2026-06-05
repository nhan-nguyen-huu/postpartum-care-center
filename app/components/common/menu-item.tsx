import { type ForwardRefExoticComponent, type RefAttributes } from 'react'

import clsx from 'clsx'
import type { LucideProps } from 'lucide-react'
import { Link } from 'react-router'

interface IMenuItemProps {
  isActive: boolean
  url: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  name: string
  onAction?: () => void
}
const MenuItem = ({ isActive, url = '', icon, name, onAction }: IMenuItemProps) => {
  const Icon = icon
  return (
    <Link
      className={clsx(
        'bg-white hover:bg-gray-200 transition-all duration-200 ease-in cursor-pointer flex items-center gap-1 px-3 py-2 rounded-[8px]',
        isActive && 'bg-black! text-white!'
      )}
      to={url}
      onClick={() => onAction?.()}
    >
      <Icon className='size-4' />
      <span className='text-sm'>{name}</span>
    </Link>
  )
}

export default MenuItem
