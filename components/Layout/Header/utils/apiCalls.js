import { useQuery } from 'react-query'

import { USER_PROFILE } from '@config/string'
import api from '@utils/api'

export const getProfile = async () => {
  const { data } = await api.get('/users/me')
  return data
}

export const useProfileData = () => useQuery(USER_PROFILE, () => getProfile(), { refetchOnWindowFocus: false })
