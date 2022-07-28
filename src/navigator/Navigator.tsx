import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes'

export const Navigator = () => {
  return (
    <Routes>
      {routes.map((route, key) => (<Route key={key} path={route.path} element={<route.Component/>}/>))}
      <Route path="*" element={<Navigate to="/home" replace />}/>
    </Routes>
  )
}
