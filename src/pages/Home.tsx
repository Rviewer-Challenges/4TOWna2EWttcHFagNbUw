import { NewCard } from '../components/NewCard'
import { SectionTitle } from '../components/shared/SectionTitle'
import { TopNewCard } from '../components/TopNewCard'
import { notices } from '../utils/data'

export const Home = () => {
  return (
    <div className="flex flex-1 flex-col divide-y">
      <div>
        <SectionTitle title={'Today\'s new'}/>
        <TopNewCard notice={notices[3]}/>
      </div>
      <div>
        <SectionTitle title='Latest News'/>
        <div className='columns-1 w-3/4'>
          <NewCard notice={notices[1]}/>
          <NewCard notice={notices[2]}/>
          <NewCard notice={notices[3]}/>
          <NewCard notice={notices[3]}/>
          <NewCard notice={notices[3]}/>
          <NewCard notice={notices[3]}/>
        </div>
      </div>
    </div>
  )
}
