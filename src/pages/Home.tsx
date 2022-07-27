import { NewCard } from '../components/NewCard'
import { SectionTitle } from '../components/shared/SectionTitle'
import { TopNewCard } from '../components/TopNewCard'
import { useHome } from '../hooks/useHome'

export const Home = () => {
  const { notices, isLoading, goToNoticeDetails } = useHome()

  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className='divide-y px-2'>
      <section className='flex flex-col'>
        <SectionTitle title={'Today\'s new'}/>
        <TopNewCard notice={notices[0]} onClick={() => goToNoticeDetails(notices[0].Title)}/>
      </section>
      <section>
        <SectionTitle title='All the latest'/>
        <span className='text-sm text-[#666]'>The latest news of the international soccer</span>
        <div>
          {notices.slice(1, 6).map((value, index) => <NewCard notice={value} key={index} onClick={() => goToNoticeDetails(value.Title)}/>)}
        </div>
      </section>
    </div>
  )
}
