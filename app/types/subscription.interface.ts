import { IBase } from '@/types/base.interface'
import { IUser } from '@/types/user.interface'

export interface ISubscription extends IBase {
	fromUser: IUser

	toChannel: IUser
}
