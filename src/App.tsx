import { Navbar } from './components/shared/Navbar'
import Provider from './context/Context'
import { Navigator } from './navigator/Navigator'

function App () {
  return (
    <Provider>
      <div className='flex flex-1 flex-col'>
        <Navbar/>
        <div className="flex justify-center items-center">
          <Navigator/>
        </div>
      </div>
    </Provider>
  )
}

export default App
