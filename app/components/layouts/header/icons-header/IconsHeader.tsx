import { FC } from 'react'

import AuthForm from '@/components/layouts/header/auth-form/AuthForm'
import ProfileMenu from '@/components/layouts/header/profile-menu/ProfileMenu'
import UploadVideo from '@/components/layouts/header/upload-video/UploadVideo'

import { useAuth } from '@/hooks/useAuth'

import styles from './IconsHeader.module.scss'

const IconsHeader: FC = () => {
	const { user } = useAuth()

	return (
		<div className={styles.icons}>
			{user ? (
				<>
					<ProfileMenu />
					<UploadVideo />
				</>
			) : (
				<AuthForm />
			)}
		</div>
	)
}

export default IconsHeader
