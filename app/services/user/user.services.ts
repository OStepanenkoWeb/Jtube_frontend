import { IUser } from '@/types/user.interface'

import { axiosApi } from '../../api/axios'
import { URL_GET_USERS_ALL, URL_GET_USER_BY_ID } from '../../configs/url.config'

export const UserServices = {
	async getAll() {
		return await axiosApi.get<IUser[]>(URL_GET_USERS_ALL)
	},
	async getUser(id: number) {
		return await axiosApi.get<IUser[]>(URL_GET_USER_BY_ID(id))
	}
}
