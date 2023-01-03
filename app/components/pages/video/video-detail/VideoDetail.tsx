import dayjs from 'dayjs'
import { FC } from 'react'
import { HiCalendar } from 'react-icons/hi'
import { IoEyeSharp } from 'react-icons/io5'
import { RiHeart2Fill } from 'react-icons/ri'

import { IVideoDetail } from '@/components/pages/video/video-detail/video-detail.interface'
import SubscribeButton from '@/components/ui/buttons/subscribeButton/SubscribeButton'
import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall'

import { videoApi } from '@/store/api/video.api'

import { formatNumberToK } from '@/utils/format-number'

import styles from './VideoDetail.module.scss'

const VideoDetail: FC<IVideoDetail> = ({ video, channel }) => {
	const [updateLike, { isLoading: isLikeLoading }] =
		videoApi.useUpdateLikesMutation()
	return (
		<div className={styles.detail}>
			<div>
				<ChannelInfoSmall channel={channel} />
				<h1>{video.name}</h1>
				<article className={styles.article}>{video.description}</article>
			</div>
			<div className='pt-2'>
				<div className={styles.wrapper_button}>
					{video.author?.id && (
						<SubscribeButton channelIdForSubscribe={video.author.id} />
					)}
					<button
						className={styles.likeButton}
						disabled={isLikeLoading}
						onClick={() => updateLike(video.id)}
					>
						<RiHeart2Fill />
						Лайк
					</button>
				</div>

				<div className={styles.number_info}>
					<div>
						<IoEyeSharp />
						<span> {formatNumberToK(video.viewsCount)} просмотров</span>
					</div>
					<div>
						<RiHeart2Fill />
						<span> {formatNumberToK(video.likesCount)} лайков</span>
					</div>
					<div>
						<HiCalendar />
						<span> {dayjs(new Date(video.createdAt)).fromNow()} лайков</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoDetail
