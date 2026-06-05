import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Link, matchPath } from 'react-router'
import { layoutHelper } from '~/helpers'

const Menu = () => {
  const { t } = useTranslation()
  return (
    <section className='flex items-center gap-2'>
      {layoutHelper.getMenu(t).map((m, index) => {
        const isActive = !!matchPath({ path: m.url, end: false }, location.pathname)
        return (
          <Link
            key={index}
            className={clsx(
              'bg-white hover:bg-gray-200 transition-all duration-200 ease-in cursor-pointer flex items-center gap-1 px-3 py-2 rounded-[8px]',
              isActive && 'bg-black! text-white!'
            )}
            to={m.url}
          >
            <m.icon className='size-4' />
            <span className='text-sm'>{m?.name}</span>
          </Link>
        )
      })}
    </section>
  )
}

export default Menu
