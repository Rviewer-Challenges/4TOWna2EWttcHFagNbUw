import { Notice } from '../interfaces/Notice'
import { FeedProvider } from '../interfaces/FeedProvider'
import { User } from '../interfaces/User'

export type InsideGoalContext = {
  notices: Notice[]
  providers: FeedProvider[]
  currentUser: User
  theme: string
  loadNotices: () => void
  loadProviders: () => void
  loadUser: () => void
  toggleMode: () => void
}
