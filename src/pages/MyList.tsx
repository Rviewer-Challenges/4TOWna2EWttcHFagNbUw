import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoticeMyList } from '../components/NoticeMyList'
import { SectionTitle } from '../components/shared/SectionTitle'
import { Context } from '../context/Context'
import { InsideGoalContext } from '../context/InsideGoalContext'

export const MyList = () => {
  const { currentUser } = useContext(Context) as InsideGoalContext
  const { list } = currentUser

  const navigate = useNavigate()

  const goToNoticeDetails = (title:string) => {
    navigate(`/notice/${title}`)
  }
  return (
    <div className='flex min-h-screen justify-center p-3'>
      <section className='divide-y'>
        <SectionTitle title='My List'/>
        {list.map((notice, key) =>
          (<NoticeMyList key={key} notice={notice} onClick={() => goToNoticeDetails(notice.Title)}/>))
        }
      </section>
    </div>
  )
}
