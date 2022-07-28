import { Footer } from './components/Footer'
import { Navbar } from './components/shared/Navbar'
import Provider from './context/Context'
import { Navigator } from './navigator/Navigator'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <Provider>
      <main className="flex flex-1 flex-col justify-center items-center">
        <Navbar/>
        <Navigator/>
        <Footer/>
      </main>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  )
}

export default App
