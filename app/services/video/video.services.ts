import { IVideo } from '@/types/video.interface'

import { axiosApi } from '../../api/axios'
import {
	URL_GET_VIDEOS_ALL,
	URL_GET_VIDEO_POPULAR
} from '../../configs/url.config'

export const VideoServices = {
	async getAll() {
		return await axiosApi.get<IVideo[]>(URL_GET_VIDEOS_ALL)
	},
	async getMostPopular() {
		return await axiosApi.get<IVideo[]>(URL_GET_VIDEO_POPULAR)
	}
}
