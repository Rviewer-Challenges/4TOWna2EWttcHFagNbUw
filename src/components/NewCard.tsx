import moment from 'moment'
import { Notice } from '../interfaces/Notice'

interface Props {
  notice: Notice
}

const MAX_CHARACTERS = 180

export const getShortedDescription = (description: string) => {
  return description.length > MAX_CHARACTERS
    ? (description.substring(0, description.lastIndexOf(' ', MAX_CHARACTERS)) + ' ...')
    : description
}

export const NewCard = ({ notice }:Props) => {
  const { Title, Author, PublicationDate, Media, Description } = notice
  const publicationDateFormatted = moment(PublicationDate).startOf('hour').fromNow()
  const descriptionFormatted = getShortedDescription(Description)

  return (
    <div className="flex flex-row rounded-md my-5">
      <img src={Media} className='rounded-md flex w-72 h-44'/>
      <div className='flex flex-1 ml-1 flex-col px-3'>
        <h2 className='text-2xl font-semibold'>{Title}</h2>
        <div className='flex flex-row items-start mb-2'>
          <span className='text-sm '>{Author}</span>
          <span className='text-sm ml-2 text-orange-400'>{publicationDateFormatted}</span>
        </div>
        <div className='h-7'>
          <p className='pr-2 break-words'>{descriptionFormatted}</p>
        </div>
      </div>
    </div>
  )
}
