import { Navbar } from './components/shared/Navbar'
import Provider from './context/Context'
import { Navigator } from './navigator/Navigator'

function App () {
  return (
    <Provider>
      <main className="flex flex-1 flex-col justify-center items-center">
        <Navbar/>
        <Navigator/>
      </main>
    </Provider>
  )
}

export default App
