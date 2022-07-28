import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faArrowLeft, faHouse, faList, faUser, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faBars, faArrowLeft, faHouse, faList, faUser, faBookmark)

interface Props {
  prefix: IconPrefix
  name: IconName
  color?:string
  onClick?: () => void
}
export const Icon = ({ prefix, name, color = '#141946', onClick }:Props) => {
  return (
    <FontAwesomeIcon icon={[prefix, name]} onClick={onClick} size='lg' color={color} className='p-1 mr-3'/>
  )
}
