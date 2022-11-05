import React, { FC, useState } from 'react'
import { HiUpload } from 'react-icons/hi'

import { videoApi } from '@/store/api/video.api'

import stylesIcon from '../icons-header/IconsHeader.module.scss'

const UploadVideo: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [videoId, setVideoId] = useState<number>(0)

	const [createVideo, { isLoading }] = videoApi.useCreateVideoMutation()

	const addVideoHandler = () => {
		createVideo()
			.unwrap()
			.then(id => {
				setVideoId(Number(id))
				setIsOpen(true)
			})
	}

	return (
		<>
			<button
				className={stylesIcon.buttons}
				disabled={isLoading}
				onClick={addVideoHandler}
			>
				<HiUpload />
			</button>
		</>
	)
}

export default UploadVideo
