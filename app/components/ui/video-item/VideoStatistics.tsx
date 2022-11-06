import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FC } from 'react'

import { formatNumberToK } from '@/utils/format-number'

import styles from './VideoItem.module.scss'

dayjs.extend(relativeTime)

interface IVideoStatistics {
	views: number
	createdAt?: string
}

const VideoStatistics: FC<IVideoStatistics> = ({ views, createdAt }) => {
	return (
		<div className={styles.number_info}>
			<div className={styles.views}>{formatNumberToK(views)} просмотров</div>
			{Boolean(
				createdAt && (
					<>
						<div className={'mx-2'}>.</div>
						<div className={styles.date}>
							{dayjs(new Date(createdAt)).fromNow()}
						</div>
					</>
				)
			)}
		</div>
	)
}

export default VideoStatistics
