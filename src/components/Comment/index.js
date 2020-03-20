import React, { useState } from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import classnames from 'classnames';
import postService from '../../services/post';

const Comment = ({ currentPost, setCurrentPost, user }) => {
	const [commentInput, setCommentInput] = useState('');
	console.log(currentPost);

	const handleCommentInput = e => {
		setCommentInput(e.target.value);
	};

	const submitComment = async e => {
		if (e.keyCode === 13 && user._id) {
			try {
				const newComment = await postService.createCommentInPost(
					user._id,
					currentPost._id,
					commentInput,
				);
				console.log('hi', newComment);
				if (newComment.data.success) {
					const nextPost = { ...currentPost };
					console.log(nextPost);
					nextPost.comments = newComment.data.data.comments;

					setCurrentPost(nextPost);
				}
			} catch (error) {
				alert(error.message);
			}
		}
	};

	return (
		<div className={classnames('comment-container')}>
			<div className='comment-extra'>
				<span>View previous comments</span>
				<span>2 of 999+</span>
			</div>

			{currentPost.comments &&
				currentPost.comments.map(comment => (
					<div className='comment-comment'>
						<div className='comment-wraper'>
							<img src={icon} alt='' />
							<div className='comment-content'>
								<div className='comment-name'>{comment.authorId}</div>
								<span>{comment.text}</span>
							</div>
						</div>
						<div className='comment-like'>like</div>
					</div>
				))}

			<div className='comment-write'>
				<img src={icon} alt='' />
				<input
					value={commentInput}
					onChange={handleCommentInput}
					placeholder='Write a comment'
					type='text'
					onKeyDown={submitComment}
				/>
			</div>
		</div>
	);
};

export default Comment;
