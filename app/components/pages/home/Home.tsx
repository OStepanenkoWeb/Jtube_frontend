import { FC } from 'react'

import Layout from '@/components/layouts/Layout'
import Catalog from '@/components/pages/home/catalog/Catalog'
import Discover from '@/components/pages/home/discover/Discover'

const Home: FC = () => {
	return (
		<Layout title='Jtube v0.0 | Видеохостинг'>
			<Discover />
			<Catalog />
		</Layout>
	)
}

export default Home
