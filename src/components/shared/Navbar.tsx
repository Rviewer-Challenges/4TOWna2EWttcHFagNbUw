import { Logo } from './Logo'

export const Navbar = () => {
  return (
    <header className='fixed top-0 h-14 w-screen border-b border-orange-500 bg-white pt-3'>
      <div className='flex flex-1 flex-row px-72'>
        <Logo/>
        <div className='flex flex-1 justify-between'>
          <div className='flex items-start'>
            <a className='px-2 mx-3 text-lg'>Home</a>
            <a className='px-2 mx-3 text-lg'>My List</a>
          </div>
          <span>Profile</span>
        </div>
      </div>
    </header>
  )
}
