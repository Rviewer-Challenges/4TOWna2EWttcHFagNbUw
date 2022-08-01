import { Route } from '../interfaces/Route'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { MyList } from '../pages/MyList'
import { NoticeDetail } from '../pages/NoticeDetail'
import { Providers } from '../pages/Providers'

export const routes:Route[] = [
  { path: '/login', prefix: 'fas', icon: 'list', label: 'Notice', Component: Login },
  { path: '/home', prefix: 'fas', icon: 'house', label: 'Home', Component: Home },
  { path: '/mylist', prefix: 'fas', icon: 'list', label: 'My List', Component: MyList },
  { path: '/providers', prefix: 'fas', icon: 'rss', label: 'Providers', Component: Providers },
  { path: '/notice/:title', prefix: 'fas', icon: 'list', label: 'Notice', Component: NoticeDetail }
]

export const navbar:Route[] = [routes[1], routes[2], routes[3]]
