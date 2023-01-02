import { FC } from 'react'

import AddComment from '@/components/pages/video/comments/add-coment/AddComment'
import CommentItem from '@/components/pages/video/comments/comment-item/CommentItem'
import { ICommentForm } from '@/components/pages/video/comments/comment.interface'

import { useAuth } from '@/hooks/useAuth'

import styles from './Comments.module.scss'

const Comments: FC<ICommentForm> = ({ comments, videoId }) => {
	const { user } = useAuth()

	return (
		<div className={styles.comments}>
			<h2>Комментарии</h2>
			<div className={styles.line}>
				{comments.length ? (
					<div className={styles.grid}>
						{comments.map(comment => (
							<CommentItem comment={comment} key={comment.id} />
						))}
					</div>
				) : (
					<p>Комментариев не найдено!</p>
				)}

				<div className={styles.bottomForm}>
					{user && <AddComment videoId={videoId} />}
				</div>
			</div>
		</div>
	)
}

export default Comments
