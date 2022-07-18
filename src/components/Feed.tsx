import { Notice } from '../interfaces/Notice'
import { NewCard } from './NewCard'
import { SectionTitle } from './shared/SectionTitle'
import { TopNewCard } from './TopNewCard'

interface Props {
  notices:Notice[]
}

export const Feed = ({ notices }:Props) => {
  return (
    <div className="flex flex-1 flex-col divide-y">
      <div>
        <SectionTitle title={'Today\'s new'}/>
        <TopNewCard notice={notices[0]}/>
      </div>
      <div>
        <SectionTitle title='Latest News'/>
        <div className='columns-1 w-3/4'>
          {notices.map((value, index) => <NewCard notice={value} key={index}/>)}
        </div>
      </div>
    </div>
  )
}
