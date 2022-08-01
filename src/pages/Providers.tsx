import { useContext, useEffect, useState } from 'react'
import { ProviderCard } from '../components/ProviderCard'
import { SectionTitle } from '../components/shared/SectionTitle'
import { Context } from '../context/Context'
import { InsideGoalContext } from '../context/InsideGoalContext'
import { FeedProvider } from '../interfaces/FeedProvider'
import { addProviderToUser, removeProviderFromUser } from '../services/firebase/provider'

export const Providers = () => {
  const { currentUser, providers } = useContext(Context) as InsideGoalContext
  const [myProviders, setMyProviders] = useState<FeedProvider[]>(providers)

  const isFeedBelongsToUserProviderList = (feed: FeedProvider) => {
    const { provider } = currentUser
    return provider.includes(feed.ID)
  }

  const handleSubscribe = (feed: FeedProvider) => {
    isFeedBelongsToUserProviderList(feed) ? unsubscribe(feed) : subscribe(feed)
    setMyProviders([...myProviders, feed])
  }

  const unsubscribe = (feed: FeedProvider) => {
    removeProviderFromUser({ user: currentUser, provider: feed })
  }

  const subscribe = (feed:FeedProvider) => {
    addProviderToUser({ user: currentUser, provider: feed })
  }

  const formatProviders = () => {
    const providersFormatted = providers.map(feed => {
      const isSubscribed = currentUser.provider.includes(feed.ID)

      return {
        ...feed,
        IsSubscribed: isSubscribed
      }
    })

    return providersFormatted
  }

  useEffect(() => {
    const providersFormatted = formatProviders()
    setMyProviders(providersFormatted)
  }, [currentUser.provider])

  return (
    <section className='flex flex-col divide-y px-3'>
      <SectionTitle title='Providers'/>
      <div>
        {myProviders.map((provider, key) => (<ProviderCard key={key} provider={provider} onClick={() => handleSubscribe(provider)}/>))}
      </div>
    </section>
  )
}
