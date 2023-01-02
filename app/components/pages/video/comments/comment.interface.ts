import { IComment } from '@/types/comment.interface'

export interface ICommentForm {
	comments: IComment[]
	videoId: number
}
