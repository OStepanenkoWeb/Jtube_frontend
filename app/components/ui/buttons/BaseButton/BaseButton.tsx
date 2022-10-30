import { FC, PropsWithChildren } from 'react'

import { IButton } from '@/components/ui/buttons/BaseButton/button.interface'

import styles from './BaseButton.module.scss'

const BaseButton: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return <button className={styles.button}>{children}</button>
}

export default BaseButton
