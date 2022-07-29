import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/Context'
import { InsideGoalContext } from '../context/InsideGoalContext'

export const useNoticeDetail = () => {
  const { title } = useParams()
  const noticeTitle = title !== undefined ? title : ''
  const { notices, currentUser } = useContext(Context) as InsideGoalContext

  const getNotice = (title: string) => {
    let notice = notices.find(notice => notice.Title === title)

    if (notice === undefined) {
      notice = currentUser.list.find(notice => notice.Title === title)
    }

    return notice
  }

  return {
    title,
    notice: getNotice(noticeTitle)
  }
}
