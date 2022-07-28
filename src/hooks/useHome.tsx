import { useContext, useEffect } from 'react'
import { Context } from '../context/Context'
import { InsideGoalContext } from '../context/InsideGoalContext'
import { useNavigate } from 'react-router-dom'
import { Notice } from '../interfaces/Notice'
import { addNoticeToUserList } from '../services/firebase/user'

export const useHome = () => {
  const { notices, isLoading, currentUser, loadNotices, loadUser } = useContext(Context) as InsideGoalContext

  const navigate = useNavigate()

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
    goToNoticeDetails,
    addNotice
  }
}
