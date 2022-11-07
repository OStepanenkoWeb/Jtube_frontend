import { FC } from 'react'

import Layout from '@/components/layouts/Layout'
import Catalog from '@/components/pages/home/catalog/Catalog'
import Discover from '@/components/pages/home/discover/Discover'
import { IHome } from '@/components/pages/home/home.inteface'

const Home: FC<IHome> = ({ randomVideo, topVideo, newVideos }) => {
	return (
		<Layout title='Jtube v0.0 | Видеохостинг'>
			<Discover randomVideo={randomVideo} topVideo={topVideo} />
			<Catalog newVideos={newVideos} />
		</Layout>
	)
}

export default Home
