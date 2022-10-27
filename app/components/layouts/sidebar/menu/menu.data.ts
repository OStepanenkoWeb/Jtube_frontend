import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi'

import { IMenuItem } from '@/components/layouts/sidebar/menu/menu.interface'

export const menuData: IMenuItem[] = [
	{
		title: 'Главная',
		icon: HiHome,
		link: '/'
	},
	{
		title: 'Тренды',
		icon: HiChartBar,
		link: '/trending'
	},
	{
		title: 'Мой канал',
		icon: HiStar,
		link: '/my-channel'
	},
	{
		title: 'Мои подписки',
		icon: HiCollection,
		link: '/subscriptions'
	}
]
