import { Navbar } from './components/shared/Navbar'
import { Home } from './pages/Home'

function App () {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto px-44 pt-16">
        <Home/>
      </div>
    </div>
  )
}

export default App
