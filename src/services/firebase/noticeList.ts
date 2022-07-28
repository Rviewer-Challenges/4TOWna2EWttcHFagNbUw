import { doc, updateDoc } from 'firebase/firestore'
import { Notice } from '../../interfaces/Notice'
import { User } from '../../interfaces/User'
import { database, USER_COLLECTION } from './config'
import { toast } from 'react-toastify'

interface UserNoticeProps {
  user: User
  notice: Notice
}

export const addNoticeToUserList = ({ user, notice }: UserNoticeProps) => {
  if (!user.list.includes(notice)) {
    user.list = [...user.list, notice]
    const currentUserCollection = doc(database, USER_COLLECTION, user.id)
    updateDoc(currentUserCollection, { list: user.list }).then(() => toast.success('Notice saved to My List')).catch(() => toast.error('Can not save the notice'))
  }
}

export const removeNoticeFromUserList = ({ user, notice }: UserNoticeProps) => {
  const newList = user.list.filter(item => item.Title !== notice.Title)
  const currentUserCollection = doc(database, USER_COLLECTION, user.id)
  updateDoc(currentUserCollection, { list: newList }).then(() => toast.success('Notice deleted to My List')).catch(() => toast.error('Can not delete the notice'))
  user.list = newList
}
