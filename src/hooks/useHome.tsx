import { useContext, useEffect } from 'react'
import { Context } from '../context/Context'
import { InsideGoalContext } from '../context/InsideGoalContext'
import { useNavigate } from 'react-router-dom'

export const useHome = () => {
  const { notices, isLoading, loadNotices } = useContext(Context) as InsideGoalContext

  const navigate = useNavigate()

  const goToNoticeDetails = (title:string) => {
    navigate(`/notice/${title}`)
  }

  useEffect(() => {
    loadNotices()
  }, [])

  return {
    notices,
    isLoading,
    goToNoticeDetails
  }
}
