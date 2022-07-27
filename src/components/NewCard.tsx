import moment from 'moment'
import { Notice } from '../interfaces/Notice'

interface Props {
  notice: Notice
  onClick: () => void
}

const MAX_CHARACTERS = 180

export const getShortedDescription = (description: string) => {
  return description.length > MAX_CHARACTERS
    ? (description.substring(0, description.lastIndexOf(' ', MAX_CHARACTERS)) + ' ...')
    : description
}

export const NewCard = ({ notice, onClick }:Props) => {
  const { Title, Author, PublicationDate, Media, Description } = notice
  const publicationDateFormatted = moment(PublicationDate).startOf('hour').fromNow()
  const descriptionFormatted = getShortedDescription(Description)

  return (
    <article className='flex rounded-md my-8 max-w-4xl sm:flex-row flex-col cursor-pointer' onClick={onClick}>
      <img src={Media} alt={Title} className='rounded-md sm:max-w-sm w-full sm:max-h-52 bg-slate-50'/>
      <div className='p-1 ml-0 sm:ml-5'>
        <header className='text-2xl font-semibold mb-2'>{Title}</header>
        <div className='mb-5'>
          <span className='text-[#666] text-sm'>{Author}</span>
          <span className='mx-1 text-[#666] text-sm'>·</span>
          <span className='text-[#666] text-sm'>{publicationDateFormatted}</span>
        </div>
        <p className='sm:block hidden'>{descriptionFormatted}</p>
      </div>
    </article>
  )
}
