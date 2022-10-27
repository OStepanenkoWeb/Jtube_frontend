import { FC } from 'react'

import MenuItem from '@/components/layouts/sidebar/menu/MenuItem'
import { IMenu } from '@/components/layouts/sidebar/menu/menu.interface'
import Line from '@/components/ui/line/Line'

import styles from './Menu.module.scss'

const Menu: FC<IMenu> = ({ items, title }) => {
	return (
		<nav className={styles.menu_sidebar}>
			<h3>{title}</h3>
			<ul>
				{items.map(menuItem => (
					<MenuItem item={menuItem} key={menuItem.link} />
				))}
			</ul>
			<Line />
		</nav>
	)
}

export default Menu
