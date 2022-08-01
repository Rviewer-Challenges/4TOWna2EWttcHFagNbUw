import { useEffect, useState } from 'react'

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
}

const getUserPreferenceTheme = () => {
  const localStorageTheme = localStorage.getItem('theme')
  if (localStorageTheme === THEMES.LIGHT) return THEMES.LIGHT
  if (localStorageTheme === THEMES.DARK) return THEMES.DARK

  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  const useDarkMode = mq.matches

  if (useDarkMode) return THEMES.DARK
  return THEMES.LIGHT
}

export const useDarkMode = () => {
  const [theme, setTheme] = useState(getUserPreferenceTheme())

  const handleMode = () => {
    switch (theme) {
    case THEMES.LIGHT:
      document.body.classList.remove(THEMES.DARK)
      localStorage.setItem('theme', THEMES.LIGHT)
      break
    case THEMES.DARK:
      document.body.classList.add(THEMES.DARK)
      localStorage.setItem('theme', THEMES.DARK)
      break
    default: // system
      document.body.classList.remove(THEMES.DARK)
      localStorage.setItem('theme', THEMES.SYSTEM)
      break
    }
  }

  const toggleMode = () => {
    theme === THEMES.DARK ? setTheme(THEMES.LIGHT) : setTheme(THEMES.DARK)
  }

  useEffect(() => {
    handleMode()
  }, [theme])

  return {
    theme,
    toggleMode
  }
}
