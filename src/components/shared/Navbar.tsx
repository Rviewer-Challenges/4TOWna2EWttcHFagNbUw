import { useState } from 'react'
import { navbar } from '../../navigator/routes'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { NavbarItem } from './NavbarItem'

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className='md:flex justify-between items-center bg-white sticky top-0 z-20 py-2 px-5 border-b w-full dark:bg-[#1a1a1a] dark:border-[#666]'>
      <div className='flex items-start'>
        {!showNavbar && <button className='md:hidden block mt-2'><Icon prefix='fas' name='bars' onClick={handleShowNavbar}/></button> }
        <div className='sm:mx-3 my-2'>
          <Logo/>
        </div>
        <ul className={
          (showNavbar ? 'left-0' : '-left-full') +
          ' md:static fixed bottom-0 top-0 md:flex md:space-x-7 pl-2 sm:pl-0 pt-2 sm:pt-0 items-center md:bg-transparent bg-white md:w-auto w-8/12 text-black font-semibold md:space-y-0 space-y-5 transition-left sm:border-none border p-0'
        }>
          {showNavbar && <Icon prefix='fas' name='arrow-left' onClick={handleShowNavbar}/>}
          {navbar.map((item, key) => <NavbarItem route={item} key={key} showNavbar={showNavbar}/>)}
        </ul>
      </div>
    </nav>
  )
}
