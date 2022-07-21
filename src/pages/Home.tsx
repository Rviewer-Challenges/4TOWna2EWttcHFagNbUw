import { NewCard } from '../components/NewCard'
import { SectionTitle } from '../components/shared/SectionTitle'
import { TopNewCard } from '../components/TopNewCard'
import { useHome } from '../hooks/useHome'

export const Home = () => {
  const { notices, isLoading } = useHome()

  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className='divide-y px-2'>
      <section className='flex flex-col'>
        <SectionTitle title={'Today\'s new'}/>
        <TopNewCard notice={notices[1]}/>
      </section>
      <section>
        <SectionTitle title='All the latest'/>
        <span className='text-sm text-[#666]'>The latest news of the international soccer</span>
        <div>
          {notices.map((value, index) => <NewCard notice={value} key={index}/>)}
        </div>
      </section>
    </div>
  )
}
