import { useContext } from 'react'
import { Context } from '../../context/Context'
import { InsideGoalContext } from '../../context/InsideGoalContext'
import { THEMES } from '../../hooks/useDarkMode'
import { IconName, IconPrefix, library, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faBars, faArrowLeft, faHouse, faList, faUser, faBookmark, faLink, faTrash, faSun, faMoon, faRss } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faArrowLeft, faHouse, faList, faUser, faBookmark, faLinkedin, faGithub, faInstagram,
  faTwitter, faLink, faTrash, faSun, faMoon, faRss)

interface Props {
  prefix: IconPrefix
  name: IconName
  color?:string
  size?:SizeProp
  onClick?: () => void
}
export const Icon = ({ prefix, name, color = '#141946', size = 'lg', onClick }:Props) => {
  const { theme } = useContext(Context) as InsideGoalContext
  return (
    <FontAwesomeIcon icon={[prefix, name]} onClick={onClick} size={size} color={theme === THEMES.LIGHT ? color : 'white'} className='p-1 mr-3'/>
  )
}
