import { useEffect } from 'react'
import { Navbar } from './components/shared/Navbar'
import { Navigator } from './navigator/Navigator'
import { useAppDispatch } from './storage/redux/hooks'
import { getNotices } from './storage/redux/notice/action'

function App () {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getNotices())
  }, [])

  return (
    <div className='flex flex-1 flex-col'>
      <Navbar/>
      <div className="flex justify-center items-center">
        <Navigator/>
      </div>
    </div>
  )
}

export default App
