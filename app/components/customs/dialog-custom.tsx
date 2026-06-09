import clsx from 'clsx'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'

interface IDialogCustomProps {
  open?: boolean
  onOpenChange?: (isOpen: boolean) => void
  title?: string
  description?: string
  cancelText?: string
  okText?: string
  classNameHeader?: string
  classNameTitle?: string
  classNameContent?: string
  classNameWrapperChildrenContent?: string
  showDescription?: boolean
  hiddenCancelAction?: boolean
  hiddenOkAction?: boolean
  hiddenHeader?: boolean
  hiddenFooter?: boolean
  disabledOkBtn?: boolean
  hiddenCloseButton?: boolean
  onCancelAction?: () => void
  onOkAction?: () => void | Promise<void>
  triggerBtn?: React.ReactNode
  headerContent?: React.ReactNode
  children?: React.ReactNode
}
const DialogCustom = ({
  open,
  onOpenChange,
  title,
  description,
  cancelText = 'Cancel',
  okText = 'Ok',
  classNameHeader,
  classNameContent,
  classNameWrapperChildrenContent,
  showDescription = false,
  hiddenCancelAction = false,
  hiddenOkAction = false,
  hiddenHeader = false,
  classNameTitle,
  hiddenFooter = false,
  disabledOkBtn = false,
  hiddenCloseButton = false,
  onCancelAction,
  onOkAction,
  triggerBtn,
  headerContent,
  children
}: IDialogCustomProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Trigger Btn */}
      {triggerBtn && <DialogTrigger asChild>{triggerBtn}</DialogTrigger>}

      {/* Dialog content */}
      <DialogContent
        className={clsx('sm:max-w-106.25 p-4 gap-6 flex flex-col max-h-[80vh]', classNameContent)}
        showCloseButton={!hiddenCloseButton}
        onOpenAutoFocus={(e) => {
          e.preventDefault()
        }}
        onCloseAutoFocus={(e) => {
          e.preventDefault()
        }}
      >
        {/* Dialog header */}
        <DialogHeader className={clsx('', hiddenHeader && 'hidden', classNameHeader)}>
          {headerContent ? (
            headerContent
          ) : (
            <>
              <DialogTitle className={classNameTitle}>{title}</DialogTitle>
              <DialogDescription className={clsx(!showDescription && 'hidden')}>{description}</DialogDescription>
            </>
          )}
        </DialogHeader>

        {/* Main content */}
        <section className={clsx('h-full', classNameWrapperChildrenContent)}>{children}</section>

        {/* Dialog footer */}
        {!hiddenFooter && (
          <DialogFooter>
            <section className='flex-1 flex items-center justify-center gap-3'>
              {!hiddenCancelAction && (
                <DialogClose asChild>
                  <Button
                    variant='outline'
                    className='bg-white border-input flex-1 rounded-[8px] h-10'
                    onClick={() => onCancelAction?.()}
                  >
                    {cancelText}
                  </Button>
                </DialogClose>
              )}
              {!hiddenOkAction && (
                <Button onClick={() => onOkAction?.()} disabled={disabledOkBtn} className='flex-1 rounded-[8px] h-10'>
                  {okText}
                </Button>
              )}
            </section>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default DialogCustom
