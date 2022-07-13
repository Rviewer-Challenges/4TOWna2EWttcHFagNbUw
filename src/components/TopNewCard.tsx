import { Notice } from '../interfaces/Notice'
import moment from 'moment'
import { getShortedDescription } from './NewCard'

interface Props {
  notice:Notice
}

export const TopNewCard = ({ notice }:Props) => {
  const { title, publicationDate, description, author, media } = notice
  const publicationDateFormatted = moment(publicationDate).startOf('hour').fromNow()
  const descriptionFormatted = getShortedDescription(description)

  return (
    <div className="flex flex-1 rounded-md">
      <img src={media} alt={title} className="rounded-l-lg w-1/2"/>
      <div className="flex flex-1 flex-col ml-2">
        <h3 className="text-3xl font-semibold">{title.toUpperCase()}</h3>
        <div className='flex flex-row items-start mt-1'>
          <span >{author}</span>
          <span className="ml-5">{publicationDateFormatted}</span>
        </div>
        <p className='pr-4 text-xl mt-3'>{descriptionFormatted}</p>
      </div>
    </div>
  )
}
