import { IBase } from '@/types/base.interface'
import { ISubscription } from '@/types/subscription.interface'
import { IVideo } from '@/types/video.interface'

export interface IUser extends IBase {
	name: string

	email: string

	isVerified: boolean

	subscribersCount?: number

	description: string

	avatarPath: string

	videos?: IVideo[]

	subscriptions: ISubscription[]

	subscribers: ISubscription[]
}
