import Provider from './context/Context'
import { Loading } from './pages/Loading'

function App () {
  return (
    <Provider>
      <div className='dark:bg-[#1a1a1a]'>
        <Loading/>
      </div>
    </Provider>
  )
}

export default App
