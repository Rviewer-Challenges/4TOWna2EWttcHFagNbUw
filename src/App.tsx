import { Navbar } from './components/shared/Navbar'
import { Home } from './pages/Home'

function App () {
  return (
    <div className='flex flex-1 flex-col'>
      <Navbar/>
      <div className="flex justify-center items-center">
        <Home/>
      </div>
    </div>
  )
}

export default App
