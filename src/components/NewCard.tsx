import { Notice } from '../interfaces/Notice'
import { Bookmark } from './shared/Bookmark'
import { NoticeReference } from './shared/NoticeReference'

interface Props {
  notice: Notice
  onClick: () => void
  handleSaveNotice: () => void
}

const MAX_CHARACTERS = 180

export const getShortedDescription = (description: string) => {
  return description.length > MAX_CHARACTERS
    ? (description.substring(0, description.lastIndexOf(' ', MAX_CHARACTERS)) + ' ...')
    : description
}

export const NewCard = ({ notice, onClick, handleSaveNotice }:Props) => {
  const { Title, Author, PublicationDate, Media, Description } = notice
  const descriptionFormatted = getShortedDescription(Description)

  return (
    <article className='flex rounded-md my-8 max-w-4xl sm:flex-row flex-col'>
      <img src={Media} alt={Title} className='rounded-md sm:max-w-sm w-full sm:max-h-52 bg-slate-50 cursor-pointer' onClick={onClick}/>
      <div className='p-1 ml-0 sm:ml-5 flex justify-between flex-col items-start'>
        <div>
          <header className='text-2xl font-semibold mb-2 cursor-pointer' onClick={onClick}>{Title}</header>
          <div className='mb-5'>
            <NoticeReference author={Author} publicationDate={PublicationDate}/>
          </div>
          {descriptionFormatted !== 'null' && <p className='sm:block hidden'>{descriptionFormatted}</p>}
        </div>
        <Bookmark onClick={handleSaveNotice}/>
      </div>
    </article>
  )
}
