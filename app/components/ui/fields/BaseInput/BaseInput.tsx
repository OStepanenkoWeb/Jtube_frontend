import { forwardRef } from 'react'

import { IField } from '@/components/ui/fields/field.interface'

import styles from './BaseInput.module.scss'

const BaseInput = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...props }, ref) => {
		return (
			<div className={styles.input} style={style}>
				<input ref={ref} type={type} {...props} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

BaseInput.displayName = 'BaseInput'

export default BaseInput
