import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'

export const USER_COLLECTION = 'users'

const startFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBGnPc_r_S2hlo3r7gHbCCDBQ9xgsg9BgE',
    authDomain: 'inside-goal-588c9.firebaseapp.com',
    projectId: 'inside-goal-588c9',
    storageBucket: 'inside-goal-588c9.appspot.com',
    messagingSenderId: '448325098089',
    appId: '1:448325098089:web:66483bd6b7e51ae592a0f8',
    measurementId: 'G-0RPR0TWRD8'
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  return getFirestore(app)
}

export const database = startFirebase()
export const userCollection = collection(database, USER_COLLECTION)
