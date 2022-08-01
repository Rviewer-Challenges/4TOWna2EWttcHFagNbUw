import moment from 'moment'

interface Props {
  author: string
  publicationDate: string
}

export const NoticeReference = ({ author, publicationDate }:Props) => {
  const publicationDateFormatted = moment(publicationDate).startOf('hour').fromNow()
  return (
    <div>
      <span className='text-[#666] text-sm'>{author}</span>
      <span className='mx-1 text-[#666] text-sm'>·</span>
      <span className='text-[#666] text-sm'>{publicationDateFormatted}</span>
    </div>
  )
}
