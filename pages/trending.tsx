import shuffle from 'lodash/shuffle'
import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/pages/home/Home'
import { IHome } from '@/components/pages/home/home.inteface'
import Trending from '@/components/pages/trending/Trending'
import { ITrending } from '@/components/pages/trending/trending.inteface'

import { VideoServices } from '@/services/video/video.services'

import { IVideo } from '@/types/video.interface'

const TrendingPage: NextPage<ITrending> = ({ topVideos }) => {
	return <Trending topVideos={topVideos} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: topVideos } = await VideoServices.getMostPopular()

		return {
			props: {
				topVideos
			},
			revalidate: 60
		}
	} catch (e) {
		return {
			props: {
				topVideos: []
			}
		}
	}
}

export default TrendingPage
