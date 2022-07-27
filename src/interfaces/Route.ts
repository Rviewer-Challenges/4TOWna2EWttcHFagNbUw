import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'

export interface Route {
  path:string
  prefix: IconPrefix
  icon: IconName
  label: string
  Component: () => JSX.Element
}
