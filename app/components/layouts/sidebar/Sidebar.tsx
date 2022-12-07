import Link from 'next/link'
import { FC } from 'react'

import Menu from '@/components/layouts/sidebar/menu/Menu'
import { menuData } from '@/components/layouts/sidebar/menu/menu.data'

import { useAuth } from '@/hooks/useAuth'

import { api } from '@/store/api/api'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	const { user } = useAuth()
	const { data, isLoading } = api.useGetProfileQuery(null, { skip: !user })

	return (
		<aside className={styles.sidebar}>
			<Link legacyBehavior href='/'>
				<a className={styles.logo}>Jtube 0.0</a>
			</Link>
			<Menu title={'Меню'} items={menuData} />

			<Menu
				title={'Мои подписки'}
				items={
					data?.subscriptions.map(({ toChannel }) => ({
						image: toChannel?.avatarPath, //TODO delete '?' after add valid data
						title: toChannel?.name,
						link: '/c/' + toChannel?.id
					})) || []
				}
			/>

			<div className={styles.copy}>© 2022 JTUBE 0.0 by Oleg Stepanenko</div>
		</aside>
	)
}

export default Sidebar
