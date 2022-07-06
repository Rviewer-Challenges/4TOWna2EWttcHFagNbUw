import { Notice } from '../interfaces/Notice'
import moment from 'moment'

interface Props {
  notice: Notice
}

export const NewCard = ({ notice }:Props) => {
  const { title, author, publicationDate, media } = notice
  const image = media[0]
  const publicationDateFormatted = moment(publicationDate).startOf('hour').fromNow()

  return (
    <div className="flex w-64 h-64 mx-2 justify-between flex-col rounded-md">
      <div>
        <img className="rounded-t-lg" src={image} alt={`${title}_image`} width={270} height={176}/>
        <h3 className="font-semibold mt-1">{title.toUpperCase()}</h3>
      </div>
      <div className="flex justify-between mt-6 mx-1">
        <span className="text-xs">{author}</span>
        <span className="text-xs">{publicationDateFormatted}</span>
      </div>
    </div>
  )
}
