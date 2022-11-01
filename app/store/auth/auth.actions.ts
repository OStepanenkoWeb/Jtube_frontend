import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { IAuthFields } from '@/components/layouts/header/auth-form/auth.inerface'

import { IAuthData } from '@/services/auth/auth.helper'
import { AuthServices } from '@/services/auth/auth.services'

import { toastError } from '@/utils/api.utils'

const AUTH_REGISTER = 'auth/register'
const AUTH_LOGIN = 'auth/login'
const AUTH_LOGOUT = 'auth/logout'

export const register = createAsyncThunk<IAuthData, IAuthFields>(
	AUTH_REGISTER,
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthServices.register(email, password)

			toastr.success('Региспрация пользователя', 'успешно выполнена!')

			return response
		} catch (e) {
			toastError(e)

			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	AUTH_LOGIN,
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthServices.login(email, password)

			toastr.success('Пользователь', 'успешно авторизован!')

			return response
		} catch (e) {
			toastError(e)

			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk(AUTH_LOGOUT, async () => {
	return {}
})
