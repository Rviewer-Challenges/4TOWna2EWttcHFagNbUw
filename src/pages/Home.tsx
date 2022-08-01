import { NewCard } from '../components/NewCard'
import { Logo } from '../components/shared/Logo'
import { SectionTitle } from '../components/shared/SectionTitle'
import { TopNewCard } from '../components/TopNewCard'
import { useHome } from '../hooks/useHome'

export const Home = () => {
  const { notices, noticeToShow, goToNoticeDetails, addNotice, handleLoadMore } = useHome()

  if (notices.length === 0) {
    return (
      <div className='flex items-center justify-center divide-y px-2 min-h-screen dark:divide-[#666]'>
        <section className='flex flex-col items-center'>
          <Logo/>
          <SectionTitle title={'Not notices to show. Subscribe to some RSS Feed'}/>
        </section>
      </div>
    )
  }

  return (
    <div className='divide-y px-2 min-h-screen dark:divide-[#666]'>
      <section className='flex flex-col'>
        <SectionTitle title={'Today\'s new'}/>
        <TopNewCard notice={notices[0]} onClick={() => goToNoticeDetails(notices[0].Title)} handleSaveNotice={() => addNotice(notices[0])}/>
      </section>
      <section>
        <SectionTitle title='All the latest'/>
        <span className='text-sm text-[#666]'>The latest news of the international soccer</span>
        <div>
          {notices.slice(1, noticeToShow).map((value, index) => (
            <NewCard
              key={index}
              notice={value}
              onClick={() => goToNoticeDetails(value.Title)}
              handleSaveNotice={() => addNotice(value)}/>
          ))}
        </div>
        <div className='flex flex-col items-center justify-center mb-10'>
          <button className='rounded-md border p-3 font-semibold mt-2 text-center' onClick={handleLoadMore}>Load more</button>
        </div>
      </section>
    </div>
  )
}
