import { FC, PropsWithChildren } from 'react'

import IconsHeader from '@/components/layouts/header/icons-header/IconsHeader'
import Search from '@/components/layouts/header/search/Search'

import styles from './Header.module.scss'

const Header: FC<PropsWithChildren> = () => {
	return (
		<header className={styles.header}>
			<Search />
			<IconsHeader />
		</header>
	)
}

export default Header
