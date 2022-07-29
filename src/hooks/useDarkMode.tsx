import { useEffect } from 'react'

export const useDarkMode = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])
}
