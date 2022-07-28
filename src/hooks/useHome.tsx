import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { InsideGoalContext } from '../context/InsideGoalContext'
import { useNavigate } from 'react-router-dom'
import { Notice } from '../interfaces/Notice'
import { addNoticeToUserList } from '../services/firebase/noticeList'

export const useHome = () => {
  const { notices, isLoading, currentUser, loadNotices, loadUser } = useContext(Context) as InsideGoalContext

  const navigate = useNavigate()

  const [noticeToShow, setNoticeToShow] = useState(5)

  const handleLoadMore = () => {
    (noticeToShow + 10 > notices.length) ? setNoticeToShow(notices.length) : setNoticeToShow(noticeToShow + 10)
  }

  const goToNoticeDetails = (title:string) => {
    navigate(`/notice/${title}`)
  }

  const addNotice = (notice:Notice) => {
    addNoticeToUserList({ user: currentUser, notice })
  }

  useEffect(() => {
    loadNotices()
    loadUser()
  }, [])

  return {
    notices,
    isLoading,
    noticeToShow,
    goToNoticeDetails,
    addNotice,
    handleLoadMore
  }
}
