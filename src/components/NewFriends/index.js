import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import add from '../../images/add.svg';

const NewFriends = ({ strangers }) => {
	return (
		<div className='newfriends-container'>
			<div className='newfriends-title'>Friends you may know</div>
			<div className='newfriends-list'>
				{strangers &&
					strangers.map(item => (
						<div className='newfriends-friend'>
							<div className='newfriends-friend-info'>
								<img src={icon} alt='' />
								<div className='newfriends-friend-name'>{item}</div>
							</div>
							<img src={add} alt='' />
						</div>
					))}
			</div>
		</div>
	);
};

export default NewFriends;
