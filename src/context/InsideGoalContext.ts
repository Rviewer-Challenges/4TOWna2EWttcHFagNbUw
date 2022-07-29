import { Notice } from '../interfaces/Notice'
import { User } from '../interfaces/User'

export type InsideGoalContext = {
  notices: Notice[]
  currentUser: User
  theme: string
  loadNotices: () => void
  loadUser: () => void
  toggleMode: () => void
}
