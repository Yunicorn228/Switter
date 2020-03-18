import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import mood from '../../images/mood.svg';

const CreatePost = () => {
	return (
		<div className='createpost-container'>
			<div className='createpost-wraper'>
				<div className='createpost-status'>Status</div>
				<div className='createpost-input'>
					<img src={icon} alt='' />
					<input placeholder='Whats on your mind, sheldon?' type='text' />
				</div>
			</div>

			<div className='createpost-post'>
				<div className='createpost-post-mood'>
					<img src={mood} alt='' />
					<span>Mood</span>
				</div>
				<button>Share</button>
			</div>
		</div>
	);
};

export default CreatePost;
