import Link from 'next/link'
import { FC } from 'react'

import Menu from '@/components/layouts/sidebar/menu/Menu'
import { menuData } from '@/components/layouts/sidebar/menu/menu.data'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Link legacyBehavior href='/'>
				<a className={styles.logo}>Jtube 0.0</a>
			</Link>
			<Menu title={'Меню'} items={menuData} />

			<div className={styles.copy}>© 2022 JTUBE 0.0 by Oleg Stepanenko</div>
		</aside>
	)
}

export default Sidebar
