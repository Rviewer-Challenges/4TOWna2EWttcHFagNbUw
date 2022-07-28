import { createContext, useState } from 'react'
import { Notice } from '../interfaces/Notice'
import { User } from '../interfaces/User'
import { getNews } from '../services/api/news'
import { getUser } from '../services/firebase/user'
import { InsideGoalContext } from './InsideGoalContext'

export const Context = createContext<InsideGoalContext| null>(null)

interface Props {
  children?: React.ReactNode
}

const USER_DEFAULT_ID = 'LUXaysGcsd1n9oScdhGB'

const Provider = ({ children }: Props) => {
  const [notices, setNotices] = useState<Notice[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<User>({
    id: USER_DEFAULT_ID,
    email: 'spiderman@marvel.com',
    name: 'Peter Parker',
    provider: [],
    list: []
  })

  const formatNotices = (notices: Notice[]) => {
    // adjust time to the user's time zone
    notices = notices.map((notice) => {
      const { PublicationDate } = notice
      return {
        ...notice,
        Date: new Date(PublicationDate)
      }
    })

    // sort in descending order
    notices = notices.slice().sort((a, b) => b.Date.getTime() - a.Date.getTime())
    return notices
  }

  const loadUser = () => {
    getUser(USER_DEFAULT_ID).then(user => setCurrentUser(user))
  }

  const loadNotices = () => {
    getNews().then(notices => {
      const noticesFormatted = formatNotices(notices)
      setNotices(noticesFormatted)
      setIsLoading(false)
    }).catch(error => console.log('error', error))
  }

  return (
    <Context.Provider value={{ notices, isLoading, currentUser, loadNotices, loadUser }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
