import { NewCard } from '../components/NewCard'
import { TopNewCard } from '../components/TopNewCard'
import { notices } from '../utils/data'

export const Home = () => {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className='font-bold text-4xl mb-3'>{'Today\'s new'}</h1>
      <TopNewCard notice={notices[3]}/>
      <div className='divide-y mt-5 w-3/4'>
        <h2 className='font-bold text-4xl'>Latest News</h2>
        <div className='columns-1 mt-5'>
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
