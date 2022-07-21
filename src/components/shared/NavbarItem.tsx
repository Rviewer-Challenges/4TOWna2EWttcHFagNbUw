import { Link } from 'wouter'
import { Route } from '../../interfaces/Route'
import { Icon } from './Icon'

interface Props {
  route:Route
  showNavbar: boolean
}

export const NavbarItem = ({ route, showNavbar }:Props) => {
  const { prefix, icon, label, path } = route

  return (
    <Link href={path}>
      <li className='rounded-md font-semibold text-lg my-2 cursor-pointer'>{showNavbar && <Icon prefix={prefix} name={icon}/>}{label}</li>
    </Link>
  )
}
