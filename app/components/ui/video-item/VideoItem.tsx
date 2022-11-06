import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'

import VideoDuration from '@/components/ui/video-item/VideoDuration'
import VideoStatistics from '@/components/ui/video-item/VideoStatistics'
import UserAvatar from '@/components/ui/video-item/user-avatar/UserAvatar'
import { IVideoItem } from '@/components/ui/video-item/video-item.interface'

import styles from './VideoItem.module.scss'

const VideoItem: FC<IVideoItem> = ({
	item,
	isSmall,
	removeHandler,
	isUpdateLink
}) => {
	const { push } = useRouter()
	return (
		<div className={cn(styles.video_item, { [styles.small]: isSmall })}>
			{Boolean(removeHandler) && (
				<button>
					<BiTrash className={styles.trash_btn} />
				</button>
			)}
			{isUpdateLink && (
				<button
					className={styles.update_link}
					onClick={() => push(`/video/edit/${item.id}`)}
				>
					<BiEdit className={styles.edit_btn} />
				</button>
			)}

			<div className={styles.thumbnail}>
				{item.thumbnailPath && (
					<Image
						src={item.thumbnailPath || ''}
						alt={item.name}
						width={185}
						height={103}
						priority
					/>
				)}
				<VideoDuration duration={item.durations} />
				{item?.author?.avatarPath && (
					<div className={styles.user_avatar}>
						<UserAvatar user={item.author} />
					</div>
				)}
			</div>

			<div className={styles.information}>
				{!isSmall && <div className={styles.author}>{item.author?.name}</div>}
				<Link legacyBehavior href={`/v/${item.id}`}>
					<a className={styles.name}>{item.name}</a>
				</Link>
				<VideoStatistics
					views={item.viewsCount}
					createdAt={!isSmall ? item.createdAt : undefined}
				/>
			</div>
		</div>
	)
}

export default VideoItem
