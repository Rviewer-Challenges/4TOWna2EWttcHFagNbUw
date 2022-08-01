import { NewsResponse } from '../../interfaces/NewsResponse'
import { API_URL } from '../../utils/config'

export const getNews = () => {
  const url = API_URL + 'news'
  const response:Promise<NewsResponse> = fetch(url).then(res => res.json())
  return response.then(data => data.news)
}
