import { Route } from '../interfaces/Route'
import { Home } from '../pages/Home'
import { MyList } from '../pages/MyList'
import { NoticeDetail } from '../pages/NoticeDetail'

export const routes:Route[] = [
  { path: '/home', prefix: 'fas', icon: 'house', label: 'Home', component: Home },
  { path: '/mylist', prefix: 'fas', icon: 'list', label: 'My List', component: MyList },
  { path: '/notice/:id', prefix: 'fas', icon: 'list', label: 'Notice', component: NoticeDetail }
]

export const navbar:Route[] = [routes[0], routes[1]]
