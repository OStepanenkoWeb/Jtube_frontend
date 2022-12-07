import { FC } from 'react'

import Layout from '@/components/layouts/Layout'
import Catalog from '@/components/pages/home/catalog/Catalog'
import { ITrending } from '@/components/pages/trending/trending.inteface'

const Trending: FC<ITrending> = ({ topVideos }) => {
	return (
		<Layout title='Тренды'>
			<Catalog newVideos={topVideos} />
		</Layout>
	)
}

export default Trending
