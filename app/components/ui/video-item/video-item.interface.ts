import { IVideo } from '@/types/video.interface'

export interface IVideoItem {
	item: IVideo
	removeHandler?: (videoItem: number) => void
	isUpdateLink?: boolean
	isSmall?: boolean
}
