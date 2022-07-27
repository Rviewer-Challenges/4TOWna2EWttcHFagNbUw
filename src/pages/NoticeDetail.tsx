import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { NoticeReference } from '../components/shared/NoticeReference'
import { Context } from '../context/Context'
import { InsideGoalContext } from '../context/InsideGoalContext'

export const NoticeDetail = () => {
  const { title } = useParams()
  const { notices } = useContext(Context) as InsideGoalContext

  const notice = notices.find(notice => notice.Title === title)

  if (notice !== undefined) {
    const { Title, Author, PublicationDate, Media, Description, Link } = notice
    return (
      <div className='flex justify-center items-center flex-col max-w-5xl mx-3'>
        <h2 className='font-semibold text-4xl text-center mt-2'>{Title}</h2>
        <div className='mb-5 mt-1'>
          <NoticeReference author={Author} publicationDate={PublicationDate}/>
        </div>
        <img className='rounded-md' src={Media} alt={Title} width={600} height={400}/>
        <p className='text-lg font-serif max-w-4xl mt-8'>{Description}</p>
        <a className='rounded-md border p-3 font-semibold mt-8 text-center'
          href={Link}
          target="_blank"
          rel="noreferrer noopener">Visit website</a>
      </div>
    )
  }

  return (
    <div>Not found the notice {title}</div>
  )
}
