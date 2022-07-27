import { Notice } from '../interfaces/Notice'

export type InsideGoalContext = {
  notices: Notice[]
  isLoading:boolean
  loadNotices: () => void
}
