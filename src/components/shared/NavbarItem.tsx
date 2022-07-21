import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { Icon } from './Icon'

interface Props {
  prefix: IconPrefix
  icon: IconName
  label: string
  showNavbar: boolean
}

export const NavbarItem = ({ prefix, icon, label, showNavbar }:Props) => {
  return (
    <li className='rounded-md font-semibold text-lg my-2'>{showNavbar && <Icon prefix={prefix} name={icon}/>}{label}</li>
  )
}
