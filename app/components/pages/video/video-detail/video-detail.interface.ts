import { IUser } from '@/types/user.interface'
import { IVideo } from '@/types/video.interface'

export interface IVideoDetail {
	video: IVideo
	channel: IUser
}
