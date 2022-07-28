import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoticeMyList } from '../components/NoticeMyList'
import { SectionTitle } from '../components/shared/SectionTitle'
import { Context } from '../context/Context'
import { InsideGoalContext } from '../context/InsideGoalContext'
import { Notice } from '../interfaces/Notice'
import { removeNoticeFromUserList } from '../services/firebase/noticeList'

export const MyList = () => {
  const { currentUser } = useContext(Context) as InsideGoalContext
  const { list } = currentUser

  const [myList, setMyList] = useState<Notice[]>(list)

  const handleRemoveNotice = (notice:Notice) => {
    removeNotice(notice)
    const newList = myList.filter(item => item.Title !== notice.Title)
    setMyList(newList)
  }

  const navigate = useNavigate()

  const goToNoticeDetails = (title:string) => {
    navigate(`/notice/${title}`)
  }

  const removeNotice = (notice: Notice) => {
    removeNoticeFromUserList({ user: currentUser, notice })
  }

  return (
    <div className='flex min-h-screen justify-center p-3'>
      <section className='divide-y'>
        <SectionTitle title='My List'/>
        {myList.map((notice, key) =>
          (<NoticeMyList key={key} notice={notice} onClick={() => goToNoticeDetails(notice.Title)} handleRemoveNotice={() => handleRemoveNotice(notice)} />))
        }
      </section>
    </div>
  )
}
