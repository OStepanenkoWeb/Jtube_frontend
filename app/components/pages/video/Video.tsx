import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Layout from '@/components/layouts/Layout'
import Comments from '@/components/pages/video/comments/Comments'
import VideoDetail from '@/components/pages/video/video-detail/VideoDetail'
import VideoPlayer from '@/components/pages/video/video-player/VideoPlayer'

import { IUser } from '@/types/user.interface'
import { IVideo } from '@/types/video.interface'

import { videoApi } from '@/store/api/video.api'

import styles from './Video.module.scss'

const Video: FC = () => {
	const { query } = useRouter()
	const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
		Number(query.id),
		{
			skip: !query.id
		}
	)

	return (
		<Layout title={video.name}>
			<div className={styles.layout}>
				<VideoPlayer videoPath={video.videoPath} />
				<Comments comments={video.comments || []} videoId={video.id} />
			</div>
			<div className={cn(styles.layout, 'mt-7')}>
				<VideoDetail video={video} channel={video.author || ({} as IUser)} />
				<div></div>
			</div>
		</Layout>
	)
}

export default Video
