import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import { validEmail } from '@/components/layouts/header/auth-form/auth.constants'
import { IAuthFields } from '@/components/layouts/header/auth-form/auth.inerface'
import BaseButton from '@/components/ui/buttons/baseButton/BaseButton'
import BaseInput from '@/components/ui/fields/BaseInput/BaseInput'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import stylesIcon from '../icons-header/IconsHeader.module.scss'

import styles from './AuthForm.module.scss'

const LOGIN_MODE = 'login'
const REGISTER_MODE = 'register'

const AuthForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const [type, setType] = useState<typeof LOGIN_MODE | typeof REGISTER_MODE>(
		LOGIN_MODE
	)
	const { login, register: registerAction } = useActions()
	const { isLoading } = useAuth()
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type === LOGIN_MODE) login(data)
		else if (type === REGISTER_MODE) registerAction(data)
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={stylesIcon.buttons} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#A4A4A4' />
			</button>

			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<BaseInput
						{...register('email', {
							required: 'Поле E-mail обязательно к заполнению!',
							pattern: {
								value: validEmail,
								message: 'Указан не верный формат email!'
							}
						})}
						placeholder='E-mail'
						error={errors.email}
					/>
					<BaseInput
						{...register('password', {
							required: 'Поле Пароль обязательно к заполнению!',
							minLength: {
								value: 6,
								message: 'Пароль должен содержать не менее 6 символов!'
							}
						})}
						placeholder='Пароль'
						error={errors.password}
					/>
					<div className={styles.button}>
						<BaseButton
							onClick={() => setType(LOGIN_MODE)}
							disabled={isLoading}
						>
							Войти
						</BaseButton>
					</div>
					<button
						className={styles.register}
						onClick={() => setType(REGISTER_MODE)}
						disabled={isLoading}
					>
						Регистрация
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm
