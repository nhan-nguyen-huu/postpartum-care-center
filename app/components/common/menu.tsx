import { Fragment, useState } from 'react'

import { TextAlignJustify } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { matchPath } from 'react-router'
import MenuItem from '~/components/common/menu-item'
import DrawerCustom from '~/components/customs/drawer-custom'
import { Button } from '~/components/ui/button'
import { layoutHelper } from '~/helpers'

const Menu = () => {
  const { t } = useTranslation()
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <section className='xl:flex items-center gap-2 hidden'>
        {layoutHelper.getMenu(t).map((m) => {
          const isActive = !!matchPath({ path: m.url, end: false }, location.pathname)
          return (
            <Fragment key={m.url}>
              <MenuItem isActive={isActive} name={m.name} url={m.url} icon={m.icon} />
            </Fragment>
          )
        })}
      </section>
      <Button className='bg-black text-white block xl:hidden' onClick={() => setOpenMenu(!openMenu)}>
        <TextAlignJustify />
      </Button>
      <DrawerCustom open={openMenu} onOpenChange={setOpenMenu} isHiddenCancelAction isHiddenOkAction title={'Menu'}>
        <section className='flex flex-col gap-2 border-t border-t-input p-2 overflow-y-auto'>
          {layoutHelper.getMenu(t).map((m) => {
            const isActive = !!matchPath({ path: m.url, end: false }, location.pathname)
            return (
              <Fragment key={m.url}>
                <MenuItem
                  isActive={isActive}
                  name={m.name}
                  url={m.url}
                  icon={m.icon}
                  onAction={() => setOpenMenu(false)}
                />
              </Fragment>
            )
          })}
        </section>
      </DrawerCustom>
    </>
  )
}

export default Menu
