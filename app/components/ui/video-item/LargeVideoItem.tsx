import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import VideoDuration from '@/components/ui/video-item/VideoDuration'
import VideoStatistics from '@/components/ui/video-item/VideoStatistics'
import UserAvatar from '@/components/ui/video-item/user-avatar/UserAvatar'

import { IVideo } from '@/types/video.interface'

import styles from './VideoItem.module.scss'

interface ILargeVideoItem {
	video: IVideo
}

const LargeVideoItem: FC<ILargeVideoItem> = ({ video }) => {
	return (
		<div className={cn(styles.video_item, styles.large_item)}>
			<div className={styles.thumbnail}>
				{video.thumbnailPath && (
					<Image
						src={video.thumbnailPath}
						alt={video.name}
						className={styles['bg-image']}
						width={185}
						height={103}
						priority
					/>
				)}
				<VideoDuration duration={video.durations} isBottom />

				<div className={styles.information}>
					<Link legacyBehavior href={`/v/${video.id}`}>
						<a className={styles.name}>{video.name}</a>
					</Link>

					{video.author?.avatarPath && (
						<UserAvatar user={video.author} isWhite />
					)}

					<div className={styles.author}>{video.author?.name || ''}</div>

					<VideoStatistics
						views={video.viewsCount}
						createdAt={video.createdAt}
					/>
				</div>
			</div>
		</div>
	)
}

export default LargeVideoItem
