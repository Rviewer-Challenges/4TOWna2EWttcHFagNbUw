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
    <div className='divide-y'>
      <section className='flex flex-col'>
        <SectionTitle title={'Today\'s new'}/>
        <TopNewCard notice={notices[3]}/>
      </section>
      <section>
        <SectionTitle title='Latest News'/>
        <div>
          {notices.map((value, index) => <NewCard notice={value} key={index}/>)}
        </div>
      </section>
    </div>
  )
}
