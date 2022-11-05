import React, { FC } from 'react'

import { useSearch } from '@/components/layouts/header/search/useSearch'

import styles from './Search.module.scss'

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch()

	return (
		<div className={styles.search_top}>
			<label>
				<input
					type='text'
					placeholder='Поиск видео'
					value={searchTerm}
					onChange={handleSearch}
				/>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src='/img/common/search.svg' alt='' />
			</label>
			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map(video => <div key={video.id}>{video.name}</div>)
					) : (
						// data.map(video => <VideoItem isSmall item={video} key={video.id} />)
						<div className={styles.no_video}></div>
					)}
				</div>
			)}
			Search
		</div>
	)
}

export default Search
