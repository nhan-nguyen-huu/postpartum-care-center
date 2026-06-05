import clsx from 'clsx'
import { X } from 'lucide-react'
import { Button } from '~/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '~/components/ui/drawer'

interface IDrawerCustomProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: React.ReactNode
  cancelText?: string
  okText?: string
  isHiddenCancelAction?: boolean
  isHiddenOkAction?: boolean
  disabledOkAction?: boolean
  children: React.ReactNode
  classNameDrawerContent?: string
  onOkAction?: () => void
}

const DrawerCustom = ({
  open,
  onOpenChange,
  title,
  cancelText = 'Cancel',
  okText = 'Ok',
  children,
  isHiddenCancelAction = false,
  disabledOkAction,
  isHiddenOkAction,
  onOkAction,
  classNameDrawerContent
}: IDrawerCustomProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger className='sr-only'></DrawerTrigger>
      <DrawerContent
        className={clsx('border-none drawer-shadow rounded-tl-2xl! rounded-tr-2xl!', classNameDrawerContent)}
        onCloseAutoFocus={(e) => e.preventDefault()}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DrawerHeader>
          <section className='flex items-center justify-between'>
            {title && <DrawerTitle className='text-left'>{title}</DrawerTitle>}
            <DrawerDescription className='sr-only'></DrawerDescription>
            <DrawerClose asChild className=''>
              <button>
                <X className='w-5 h-5 text-[#aaaaaa]' />
              </button>
            </DrawerClose>
          </section>
        </DrawerHeader>
        {children}
        <DrawerFooter
          className={clsx('border-t border-t-[#EEEEEE]', isHiddenCancelAction && isHiddenOkAction && 'sr-only')}
        >
          {!isHiddenCancelAction && (
            <DrawerClose asChild>
              <Button className='rounded-3xl' variant='outline'>
                {cancelText}
              </Button>
            </DrawerClose>
          )}
          {!isHiddenOkAction && (
            <Button className='rounded-3xl' onClick={onOkAction} disabled={disabledOkAction}>
              {okText}
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerCustom
