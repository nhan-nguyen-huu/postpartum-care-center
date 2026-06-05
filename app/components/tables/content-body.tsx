import clsx from 'clsx'

interface IContentBodyProps {
  content?: string | number
  className?: string
  onAction?: () => void
}
const ContentBody = ({ content, className, onAction }: IContentBodyProps) => {
  return (
    <p
      className={clsx('leading-5 tracking-[-0.5%] text-black-main wrap-break-word whitespace-normal', className)}
      onClick={() => onAction?.()}
    >
      {content}
    </p>
  )
}

export default ContentBody
