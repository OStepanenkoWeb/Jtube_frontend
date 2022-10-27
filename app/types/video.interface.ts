import { IBase } from '@/types/base.interface'
import { IComment } from '@/types/comment.interface'
import { IUser } from '@/types/user.interface'

export interface IVideo extends IBase {
	name: string

	isPublic: boolean

	viewsCount?: number

	likesCount?: number

	durations?: number

	description: string

	videoPath: string

	thumbnailPath: string

	author: IUser

	comments: IComment[]
}

export interface IVideoDto
	extends Pick<
		IVideo,
		'id' | 'thumbnailPath' | 'description' | 'videoPath' | 'isPublic'
	> {}
