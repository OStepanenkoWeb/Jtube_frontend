import { FC, PropsWithChildren } from 'react'

import Search from '@/components/layouts/header/Search/Search'
import IconsHeader from '@/components/layouts/header/icons-header/IconsHeader'

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
