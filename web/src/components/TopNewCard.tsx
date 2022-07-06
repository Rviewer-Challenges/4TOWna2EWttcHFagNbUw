import { Notice } from '../interfaces/Notice'
import moment from 'moment'

interface Props {
  notice:Notice
}

export const TopNewCard = ({ notice }:Props) => {
  const { title, publicationDate, description, author, media } = notice
  const publicationDateFormatted = moment(publicationDate).startOf('hour').fromNow()
  return (
    <div className="flex flex-1 bg-blue-300 rounded-md">
      <div className="relative">
        <img src={media[0]} alt={title} className="rounded-l-lg"/>
        <div className="flex-1 absolute left-0 bottom-0 mb-5 ml-2">
          <h3 className="text-3xl font-semibold text-white mb-2">{title.toUpperCase()}</h3>
          <div className="flex items-start">
            <span className="text-white">{author}</span>
            <span className="text-white ml-5">{publicationDateFormatted}</span>
          </div>
        </div>
      </div>
      <p>{description}</p>
    </div>
  )
}
