import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import { IAuthFields } from '@/components/layouts/header/auth-form/auth.inerface'

import { useOutside } from '@/hooks/useOutside'

import stylesIcon from '../icons-header/IconsHeader.module.scss'

import styles from './AuthForm.module.scss'

const AuthForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	// const [type, setType] = useState<'login' | 'register'>('login')
	// const { isLoading } = useAuth()
	const {
		// register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = data => {}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={stylesIcon.buttons} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#A4A4A4' />
			</button>

			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}></form>
			)}
		</div>
	)
}

export default AuthForm
