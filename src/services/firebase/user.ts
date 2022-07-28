import startFirebase, { USER_COLLECTION } from './config'
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { User } from '../../interfaces/User'
import { Notice } from '../../interfaces/Notice'
import { toast } from 'react-toastify'

const database = startFirebase()
const userCollection = collection(database, USER_COLLECTION)

export const getUsers = () => {
  const response:Promise<User[]> = getDocs(userCollection).then(response => {
    const users = response.docs.map(doc => {
      const user = doc.data() as User
      return { ...user, id: doc.id }
    })
    return users
  })
  return response.then(users => users)
}

export const getUser = (id: string) => {
  const currentUser = doc(database, USER_COLLECTION, id)
  const response = getDoc(currentUser).then(response => {
    const user = response.data() as User
    return user
  })
  return response.then(user => user)
}

interface AddNoticeToUserListRequest {
  user: User
  notice: Notice
}

export const addNoticeToUserList = ({ user, notice }: AddNoticeToUserListRequest) => {
  if (!user.list.includes(notice)) {
    user.list = [...user.list, notice]
    const currentUserCollection = doc(database, USER_COLLECTION, user.id)
    updateDoc(currentUserCollection, { list: user.list }).then(() => toast.success('Notice saved to My List')).catch(() => toast.error('Can not save the notice'))
  }
}
