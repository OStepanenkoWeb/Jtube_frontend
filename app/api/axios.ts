import axios from 'axios'

import { getContentType } from '@/utils/api.utils'

export const API_URL = `${process.env.REACT_APP_URL}/api`

export const axiosApi = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})
