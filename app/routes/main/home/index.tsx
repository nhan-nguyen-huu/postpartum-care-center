import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()
  // const { getTranslateEnum } = useTransferEnum()
  // const { data: dataUserProfile } = useProfileApi()
  return (
    <section className='flex flex-col gap-5 p-5'>
      <p>{t('common.appName')}</p>
      {/* <p>{getTranslateEnum('mode', eMode, 'VIEW')}</p>
      <Button onClick={() => toast.success('Welcome coop use')} className='self-start'>
        App
      </Button> */}
    </section>
  )
}
