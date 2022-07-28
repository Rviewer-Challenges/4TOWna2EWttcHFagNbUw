import { Notice } from '../interfaces/Notice'
import { Icon } from './shared/Icon'
import { NoticeReference } from './shared/NoticeReference'

interface Props {
  notice: Notice
  onClick?: () => void
  handleRemoveNotice?: () => void
}
export const NoticeMyList = ({ notice, onClick, handleRemoveNotice }:Props) => {
  const { Media, Title, Author, PublicationDate } = notice

  return (
    <article className='flex rounded-md my-3 max-w-4xl sm:flex-row flex-col pt-3'>
      <img src={Media} alt={Title} className='rounded-md sm:max-w-xs sm:max-h-32 bg-slate-50 cursor-pointer' onClick={onClick}/>
      <div className='p-1 ml-0 sm:ml-5 flex justify-between items-start w-full'>
        <div>
          <header className='text-2xl font-semibold mb-2 cursor-pointer' onClick={onClick}>{Title}</header>
          <div className='mb-5'>
            <NoticeReference author={Author} publicationDate={PublicationDate}/>
          </div>
        </div>
        <button className='ml-2' onClick={handleRemoveNotice}>
          <Icon prefix='fas' name='trash'/>
        </button>
      </div>
    </article>
  )
}
