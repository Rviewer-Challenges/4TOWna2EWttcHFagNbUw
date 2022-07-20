import { Notice } from '../interfaces/Notice'
import { NewCard } from './NewCard'
import { SectionTitle } from './shared/SectionTitle'
import { TopNewCard } from './TopNewCard'

interface Props {
  notices:Notice[]
}

export const Feed = ({ notices }:Props) => {
  return (
    <div className="flex flex-col divide-y justify-center">
      <section>
        <SectionTitle title={'Today\'s new'}/>
        <TopNewCard notice={notices[1]}/>
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
