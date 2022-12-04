import { FC } from 'react'

import { IChannelInfoSmall } from '@/components/ui/channel-info-small/channel-info-small.interface'
import UserAvatar from '@/components/ui/video-item/user-avatar/UserAvatar'

import { formatNumberToK } from '@/utils/format-number'

import styles from './ChannelInfoSmall.module.scss'

const ChannelInfoSmall: FC<IChannelInfoSmall> = ({ channel, message }) => {
	return (
		<div className={styles.profile_info}>
			{channel.avatarPath && <UserAvatar user={channel} />}

			<div>
				<div className={styles.name}>{channel.name}</div>
				<div className={styles.subscribers_count}>
					{message ||
						formatNumberToK(channel.subscribersCount || 0) + ' subscribers'}
				</div>
			</div>
		</div>
	)
}

export default ChannelInfoSmall
