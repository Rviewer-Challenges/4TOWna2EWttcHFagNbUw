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
    <div className='flex rounded-md my-8 max-w-3xl border border-[#141946]'>
      <img src={Media} alt={Title} className='rounded-md h-36 w-auto'/>
      <div className='ml-2'>
        <h2 className='text-xl font-semibold'>{Title}</h2>
        <div className='flex flex-row items-start mb-2'>
          <span className='text-sm'>{Author}</span>
          <span className='text-sm ml-2 text-[#FF0000]'>{publicationDateFormatted}</span>
        </div>
        <p>{descriptionFormatted}</p>
      </div>
    </div>
  )
}
