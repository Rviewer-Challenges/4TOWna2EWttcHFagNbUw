import { Footer } from '../components/Footer'
import { Navbar } from '../components/shared/Navbar'
import { Navigator } from '../navigator/Navigator'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const HomePage = () => {
  return (
    <div className='flex flex-1 flex-col justify-center items-center dark:bg-[#1a1a1a] dark:text-white'>
      <Navbar/>
      <Navigator/>
      <Footer/>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}
