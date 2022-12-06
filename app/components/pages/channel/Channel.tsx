import { FC } from 'react'

import Layout from '@/components/layouts/Layout'
import { IChannel } from '@/components/pages/channel/channel.interface'
import Catalog from '@/components/pages/home/catalog/Catalog'
import SubscribeButton from '@/components/ui/buttons/subscribeButton/SubscribeButton'
import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall'

import styles from './Channel.module.scss'

const Channel: FC<IChannel> = ({ channel }) => {
	return (
		<Layout title={channel.name}>
			<div className={styles.channel}>
				<div className='flex items-center gap-12'>
					<ChannelInfoSmall channel={channel} />
					<SubscribeButton channelIdForSubscribe={channel.id} />
				</div>
				<article className={styles.channel_description}>
					{channel.description}
				</article>
			</div>
			<Catalog newVideos={channel.videos || []} />
		</Layout>
	)
}

export default Channel
