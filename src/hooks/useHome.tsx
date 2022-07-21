import { useEffect, useState } from 'react'
import { Notice } from '../interfaces/Notice'
import { getNews } from '../services/api/news'

export const useHome = () => {
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

  useEffect(() => {
    getNews().then(news => {
      const noticesFormatted = formatNotices(news)
      setNotices(noticesFormatted)
      setIsLoading(false)
    })
  }, [])

  return {
    notices,
    isLoading
  }
}
