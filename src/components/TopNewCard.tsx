import { Notice } from '../interfaces/Notice'
import moment from 'moment'
import { getShortedDescription } from './NewCard'
import { Bookmark } from './shared/Bookmark'

interface Props {
  notice:Notice
  onClick: () => void
  handleSaveNotice: () => void
}

export const TopNewCard = ({ notice, onClick, handleSaveNotice }:Props) => {
  const { Title, Author, PublicationDate, Media, Description } = notice
  const publicationDateFormatted = moment(PublicationDate).startOf('hour').fromNow()
  const descriptionFormatted = getShortedDescription(Description)

  return (
    <article className="flex flex-1 rounded-md py-5 max-w-7xl sm:flex-row flex-col">
      <img src={Media} alt={Title} width={500} height={500} className="rounded-md sm:max-w-sm w-full p-2 cursor-pointer" onClick={onClick}/>
      <div className="flex flex-1 flex-col ml-2 sm:ml-0 items-start">
        <h3 className="text-3xl font-semibold">{Title}</h3>
        <div className='flex flex-row items-start mt-1'>
          <span>{Author}</span>
          <span className='mx-2'>·</span>
          <span>{publicationDateFormatted}</span>
        </div>
        <p className='mt-5'>{descriptionFormatted}</p>
        <Bookmark onClick={handleSaveNotice}/>
      </div>
    </article>
  )
}
