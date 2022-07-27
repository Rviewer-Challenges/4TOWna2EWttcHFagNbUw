import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/Context'
import { InsideGoalContext } from '../context/InsideGoalContext'

export const NoticeDetail = () => {
  const { title } = useParams()
  const { notices } = useContext(Context) as InsideGoalContext

  const notice = notices.find(notice => notice.Title === title)
  console.log('🚀 ~ file: NoticeDetail.tsx ~ line 11 ~ NoticeDetail ~ notice', notice)

  return (
    <div>NoticeDetail</div>
  )
}
