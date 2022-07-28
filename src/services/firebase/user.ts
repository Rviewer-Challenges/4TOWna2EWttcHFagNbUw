import { database, userCollection, USER_COLLECTION } from './config'
import { doc, getDoc, getDocs } from 'firebase/firestore'
import { User } from '../../interfaces/User'

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
