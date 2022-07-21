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
    <div className="flex flex-1 rounded-md py-5 max-w-7xl sm:flex-row flex-col">
      <img src={Media} alt={Title} width={500} height={500} className="rounded-lg sm:max-w-sm w-full p-2 "/>
      <div className="flex flex-1 flex-col ml-2 sm:ml-0">
        <h3 className="text-3xl font-semibold">{Title}</h3>
        <div className='flex flex-row items-start mt-1'>
          <span>{Author}</span>
          <span className='mx-2'>·</span>
          <span>{publicationDateFormatted}</span>
        </div>
        <p className='mt-5'>{descriptionFormatted}</p>
      </div>
    </div>
  )
}
