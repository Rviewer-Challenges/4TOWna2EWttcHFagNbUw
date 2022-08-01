import { FeedProvider } from '../../interfaces/FeedProvider'
import { User } from '../../interfaces/User'
import { toast } from 'react-toastify'
import { doc, updateDoc } from 'firebase/firestore'
import { database, USER_COLLECTION } from './config'

interface UserProviderProps {
  user:User
  provider: FeedProvider
}

export const addProviderToUser = ({ user, provider }:UserProviderProps) => {
  if (!user.provider.includes(provider.ID)) {
    user.provider = [...user.provider, provider.ID]
    const currentUserCollection = doc(database, USER_COLLECTION, user.id)
    updateDoc(currentUserCollection, { provider: user.provider }).then(() => toast.success('Subscribed to the RSS provider')).catch(() => toast.error('Can not subscribe to the provider'))
  }
}

export const removeProviderFromUser = ({ user, provider }: UserProviderProps) => {
  const newProviders = user.provider.filter(item => item !== provider.ID)
  const currentUserCollection = doc(database, USER_COLLECTION, user.id)
  updateDoc(currentUserCollection, { provider: newProviders }).then(() => toast.success('Unsubscribed to the RSS provider')).catch(() => toast.error('Can not unsubscribe to the provider'))
  user.provider = newProviders
}
