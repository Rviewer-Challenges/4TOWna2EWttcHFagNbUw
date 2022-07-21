import { Navbar } from './components/shared/Navbar'
import { Navigator } from './navigator/Navigator'

function App () {
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
