import { IconName, IconPrefix, library, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faBars, faArrowLeft, faHouse, faList, faUser, faBookmark, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faArrowLeft, faHouse, faList, faUser, faBookmark, faLinkedin, faGithub, faInstagram, faTwitter, faLink)

interface Props {
  prefix: IconPrefix
  name: IconName
  color?:string
  size?:SizeProp
  onClick?: () => void
}
export const Icon = ({ prefix, name, color = '#141946', size = 'lg', onClick }:Props) => {
  return (
    <FontAwesomeIcon icon={[prefix, name]} onClick={onClick} size={size} color={color} className='p-1 mr-3'/>
  )
}
