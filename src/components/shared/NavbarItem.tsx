import { Link } from 'react-router-dom'
import { Route } from '../../interfaces/Route'
import { Icon } from './Icon'

interface Props {
  route:Route
  showNavbar: boolean
}

export const NavbarItem = ({ route, showNavbar }:Props) => {
  const { prefix, icon, label, path } = route

  return (
    <Link to={path}>
      <li className='rounded-md font-semibold text-lg my-2 cursor-pointer'>{showNavbar && <Icon prefix={prefix} name={icon}/>}{label}</li>
    </Link>
  )
}
