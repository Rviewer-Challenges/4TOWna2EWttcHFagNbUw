import { FeedProvider } from '../interfaces/FeedProvider'

interface Props {
  provider: FeedProvider,
  onClick: () => void
}

const OPTIONS = {
  FOLLOW: 'FOLLOW',
  FOLLOWING: 'FOLLOWING'
}

export const ProviderCard = ({ provider, onClick }:Props) => {
  const { Name, FeedURL, DefaultImage, IsSubscribed } = provider

  const getIsSubscribed = () => {
    return IsSubscribed ? OPTIONS.FOLLOWING : OPTIONS.FOLLOW
  }

  return (
    <div className='flex flex-1 mx-4 py-3 justify-between'>
      <div className='flex items-start'>
        <a href={FeedURL}><img src={DefaultImage} alt={Name} width={100} height={100} className='rounded-md dark:bg-transparent cursor-pointer'/></a>
        <span className='font-semibold text-xl ml-2 mr-10'>{Name}</span>
      </div>
      <button className='rounded-md border text-[#141946] dark:text-[#FF0000] font-semibold p-4 ml-4 h-14' onClick={onClick}>{getIsSubscribed()}</button>
    </div>
  )
}
