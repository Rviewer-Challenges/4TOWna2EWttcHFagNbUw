import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faArrowLeft, faHouse, faList, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faBars, faArrowLeft, faHouse, faList, faUser)

interface Props {
  prefix: IconPrefix
  name: IconName
  onClick?: () => void
}
export const Icon = ({ prefix, name, onClick }:Props) => {
  return (
    <FontAwesomeIcon icon={[prefix, name]} onClick={onClick} size='lg' className='p-1 mr-3'/>
  )
}
