import { useEffect, useState } from 'react'
import { Notice } from '../interfaces/Notice'
import { useAppSelector } from '../storage/redux/hooks'

export const useHome = () => {
  const { notices: noticesSelector } = useAppSelector(selector => selector.noticeReducer)

  const [notices, setNotices] = useState<Notice[]>([])
  const [isLoading, setIsLoading] = useState(true)

  let id = 0

  const formatNotices = (notices: Notice[]) => {
    // adjust time to the user's time zone
    notices = notices.map((notice) => {
      const { PublicationDate } = notice
      return {
        ...notice,
        Id: id++,
        Date: new Date(PublicationDate)
      }
    })

    // sort in descending order
    notices = notices.slice().sort((a, b) => b.Date.getTime() - a.Date.getTime())

    return notices
  }

  useEffect(() => {
    const noticesFormatted = formatNotices(noticesSelector)
    setNotices(noticesFormatted)
    setIsLoading(false)
  }, [noticesSelector])

  return {
    notices,
    isLoading
  }
}
