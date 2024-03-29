import { Logo } from '../components/shared/Logo'
import { NoticeReference } from '../components/shared/NoticeReference'
import { SectionTitle } from '../components/shared/SectionTitle'
import { useNoticeDetail } from '../hooks/useNoticeDetail'

export const NoticeDetail = () => {
  const { title, notice } = useNoticeDetail()

  if (notice !== undefined) {
    const { Title, Author, PublicationDate, Media, Description, Link } = notice
    return (
      <div className='flex items-center flex-col max-w-5xl mx-3 min-h-screen'>
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
    <div className='flex justify-center divide-y px-2 min-h-screen dark:divide-[#666]'>
      <section className='flex flex-col items-center'>
        <Logo/>
        <SectionTitle title={`Notice ${title} not found.`}/>
      </section>
    </div>
  )
}
