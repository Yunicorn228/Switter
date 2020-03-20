import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import classnames from 'classnames';

const Comment = ({ comments }) => {
	return (
		<div className={classnames('comment-container')}>
			<div className='comment-extra'>
				<span>View previous comments</span>
				<span>2 of 999+</span>
			</div>

			{comments &&
				comments.map(comment => (
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
				<input placeholder='Write a comment' type='text' />
			</div>
		</div>
	);
};

export default Comment;
