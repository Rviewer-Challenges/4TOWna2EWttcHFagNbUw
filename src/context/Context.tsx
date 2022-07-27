import { createContext, useState } from 'react'
import { Notice } from '../interfaces/Notice'
import { getNews } from '../services/api/news'
import { InsideGoalContext } from './InsideGoalContext'

export const Context = createContext<InsideGoalContext| null>(null)

interface Props {
  children?: React.ReactNode
}

const Provider = ({ children }: Props) => {
  const [notices, setNotices] = useState<Notice[]>([])
  const [isLoading, setIsLoading] = useState(true)

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

  const loadNotices = () => {
    getNews().then(notices => {
      const noticesFormatted = formatNotices(notices)
      setNotices(noticesFormatted)
      setIsLoading(false)
    }).catch(error => console.log('error', error))
  }

  return (
    <Context.Provider value={{ notices, isLoading, loadNotices }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
