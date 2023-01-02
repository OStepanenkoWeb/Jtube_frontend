import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/all'

import styles from '@/components/layouts/header/auth-form/AuthForm.module.scss'
import TextArea from '@/components/ui/fields/TextArea/TextArea'

import { ICommentDto } from '@/types/comment.interface'

import { commentApi } from '@/store/api/comment.api'

const AddComment: FC<{ videoId: number }> = ({ videoId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<ICommentDto>({
		mode: 'onChange'
	})

	const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation()

	const onSubmit: SubmitHandler<ICommentDto> = async data => {
		writeComment({ ...data, videoId })
			.unwrap()
			.then(() => reset())
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={'relative'}>
				<TextArea
					{...register('message', {
						required: 'Текст комментария является обязательным!'
					})}
					placeholder='Введите комментарий'
					error={errors.message}
				/>

				<button className={styles.purpleButton} disabled={isLoading}>
					<MdSend />
				</button>
			</div>
		</form>
	)
}

export default AddComment
