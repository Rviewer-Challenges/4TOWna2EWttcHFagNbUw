import { Notice } from '../interfaces/Notice'
import moment from 'moment'
import { getShortedDescription } from './NewCard'

interface Props {
  notice:Notice
}

export const TopNewCard = ({ notice }:Props) => {
  const { Title, Author, PublicationDate, Media, Description } = notice
  const publicationDateFormatted = moment(PublicationDate).startOf('hour').fromNow()
  const descriptionFormatted = getShortedDescription(Description)

  return (
    <div className="flex flex-1 rounded-md py-5">
      <img src={Media} alt={Title} className="rounded-l-lg w-1/2"/>
      <div className="flex flex-1 flex-col ml-2">
        <h3 className="text-3xl font-semibold">{Title.toUpperCase()}</h3>
        <div className='flex flex-row items-start mt-1'>
          <span >{Author}</span>
          <span className="ml-5">{publicationDateFormatted}</span>
        </div>
        <p className='pr-4 text-xl mt-3'>{descriptionFormatted}</p>
      </div>
    </div>
  )
}
