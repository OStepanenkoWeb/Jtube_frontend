import shuffle from 'lodash/shuffle'
import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/pages/home/Home'
import { IHome } from '@/components/pages/home/home.inteface'

import { VideoServices } from '@/services/video/video.services'

import { IVideo } from '@/types/video.interface'

const HomePage: NextPage<IHome> = props => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoServices.getAll()
		const { data: topVideos } = await VideoServices.getMostPopular()
		const [topVideo] = topVideos
		const [randomVideo = topVideos] = shuffle(
			newVideos.filter(video => video.id !== topVideo.id)
		)

		return {
			props: {
				newVideos,
				topVideo,
				randomVideo
			} as IHome
		}
	} catch (e) {
		return {
			props: {
				newVideos: [],
				topVideo: {} as IVideo,
				randomVideo: {} as IVideo
			} as IHome
		}
	}
}

export default HomePage
