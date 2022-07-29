import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Logo } from '../components/shared/Logo'
import { Context } from '../context/Context'
import { InsideGoalContext } from '../context/InsideGoalContext'
import { useDarkMode } from '../hooks/useDarkMode'
import { HomePage } from './HomePage'

export const Loading = () => {
  const { notices, loadNotices, loadUser } = useContext(Context) as InsideGoalContext
  const [isLoading, setIsLoading] = useState(true)

  useDarkMode()

  useEffect(() => {
    Promise.all([
      loadNotices(),
      loadUser()
    ]).then(() => setIsLoading(false)).catch(error => toast.error('error' + error))
  }, [])

  if (!isLoading && notices.length > 0) {
    return (
      <HomePage/>
    )
  }

  return (
    <div className='flex items-center justify-center mt-5 flex-1 dark:bg-black'>
      <Logo/>
    </div>
  )
}
