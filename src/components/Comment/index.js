import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import classnames from 'classnames';

const Comment = () => {
	return (
		<div className={classnames('comment-container')}>
			<div className='comment-extra'>
				<span>View previous comments</span>
				<span>2 of 999+</span>
			</div>

			<div className='comment-comment'>
				<div className='comment-wraper'>
					<img src={icon} alt='' />
					<div className='comment-content'>
						<div className='comment-name'>Elon Mask</div>
						<span>Report to my office tomorrow!</span>
					</div>
				</div>
				<div className='comment-like'>like</div>
			</div>
			<div className='comment-comment'>
				<div className='comment-wraper'>
					<img src={icon} alt='' />
					<div className='comment-content'>
						<div className='comment-name'>Mark Zuckerhamberg</div>
						<span>Take my spot bro, can't handle it no more.</span>
					</div>
				</div>
				<div className='comment-like'>like</div>
			</div>

			<div className='comment-write'>
				<img src={icon} alt='' />
				<input placeholder='Write a comment' type='text' />
			</div>
		</div>
	);
};

export default Comment;
