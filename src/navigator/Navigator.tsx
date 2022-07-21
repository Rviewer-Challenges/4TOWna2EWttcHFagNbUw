import { Redirect, Route, Switch } from 'wouter'
import { routes } from './routes'

export const Navigator = () => {
  return (
    <div>
      <Switch>
        {routes.map(({ path, component }, key) => <Route key={key} path={path} component={component}/>)}
      </Switch>
      <Redirect to="/home"/>
    </div>
  )
}
