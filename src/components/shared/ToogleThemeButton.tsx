import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { InsideGoalContext } from '../../context/InsideGoalContext'
import { THEMES } from '../../hooks/useDarkMode'

export const ToogleThemeButton = () => {
  const { theme, toggleMode } = useContext(Context) as InsideGoalContext
  return (
    <button onClick={toggleMode}>
      <FontAwesomeIcon icon={['fas', theme === THEMES.LIGHT ? 'sun' : 'moon']} size='lg' color={theme === THEMES.LIGHT ? '#141946' : 'white'}/>
    </button>
  )
}
