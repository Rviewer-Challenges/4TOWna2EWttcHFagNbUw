import { ProvidersResponse } from '../../interfaces/ProvidersResponse'
import { API_URL } from '../../utils/config'

export const getProviders = () => {
  const url = API_URL + 'providers'
  const response:Promise<ProvidersResponse> = fetch(url).then(res => res.json())
  return response.then(data => data.providers)
}
