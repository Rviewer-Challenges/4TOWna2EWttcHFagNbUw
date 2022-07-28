import { Notice } from '../interfaces/Notice'
import { User } from '../interfaces/User'

export type InsideGoalContext = {
  notices: Notice[]
  isLoading:boolean
  currentUser: User
  loadNotices: () => void
  loadUser: () => void
}
