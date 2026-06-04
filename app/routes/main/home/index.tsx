export default function HomePage() {
  // const { getTranslateEnum } = useTransferEnum()
  // const { data: dataUserProfile } = useProfileApi()
  const DATA = [
    {
      name: '오늘 일정 요약',
      count: 0
    },
    {
      name: '오늘 일정 요약',
      count: 0
    },
    {
      name: '오늘 일정 요약',
      count: 0
    },
    {
      name: '오늘 일정 요약',
      count: 0
    }
  ]
  return (
    <section className='flex items-center'>
      <section className='w-[20%] h-dvh overflow-y-auto p-5'>
        <section className='flex flex-col gap-5'>
          <p>오늘 일정 요약</p>
          {DATA.map((d) => {
            return (
              <section className='bg-primary rounded p-10'>
                <p className='text-white'>{d?.name}</p>
              </section>
            )
          })}
        </section>
      </section>
      <section className='w-[80%] h-dvh p-5'>
        <p>오늘 일정 요약</p>
      </section>
    </section>
  )
}
