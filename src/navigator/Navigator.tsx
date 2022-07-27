import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

export const Navigator = () => {
  return (
    <Routes>
      {routes.map((route, key) => (<Route key={key} path={route.path} element={<route.Component/>}/>))}
    </Routes>
  )
}
