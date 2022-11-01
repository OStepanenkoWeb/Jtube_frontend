import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	PersistConfig,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducers } from '@/store/root-reducers'

const persistConfig: PersistConfig<any> = {
	key: 'root',
	storage,
	whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducers>
