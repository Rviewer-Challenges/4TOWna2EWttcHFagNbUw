import { Icon } from './Icon'

interface Props {
  onClick: () => void
}

export const Bookmark = ({ onClick }:Props) => {
  return (
    <button onClick={onClick} className='p-2 px-3 rounded-full my-2 text-[#141946] font-semibold'><Icon prefix='fas' name='bookmark' color='#FF0000'/> Save to My List</button>
  )
}
