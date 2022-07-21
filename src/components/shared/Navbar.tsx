import { Logo } from './Logo'

export const Navbar = () => {
  return (
    <header className='flex justify-center items-start h-14 border-b py-3'>
      <Logo/>
      <div className='flex justify-between'>
        <div className='flex items-start'>
          <a className='px-2 mx-3 text-lg'>Home</a>
          <a className='px-2 mx-3 text-lg'>My List</a>
        </div>
        <span>Profile</span>
      </div>
    </header>
  )
}
