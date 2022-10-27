import { IAuthData } from '@/services/auth/auth.helper'

import { axiosApi } from '../../api/axios'
import { URL_LOGIN, URL_REGISTER } from '../../configs/url.config'

export const AuthServices = {
	async login(email: string, password: string) {
		const response = await axiosApi.post<IAuthData>(URL_LOGIN, {
			email,
			password
		})

		return response.data
	},

	async register(email: string, password: string) {
		const response = await axiosApi.post<IAuthData>(URL_REGISTER, {
			email,
			password
		})

		return response.data
	}
}
