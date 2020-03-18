import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import add from '../../images/add.svg';

const NewFriends = () => {
	return (
		<div className='newfriends-container'>
			<div className='newfriends-title'>Friends you may know</div>
			<div className='newfriends-list'>
				<div className='newfriends-friend'>
					<div className='newfriends-friend-info'>
						<img src={icon} alt='' />
						<div className='newfriends-friend-name'>Will Wu</div>
					</div>
					<img src={add} alt='' />
				</div>
				<div className='newfriends-friend'>
					<div className='newfriends-friend-info'>
						<img src={icon} alt='' />
						<div className='newfriends-friend-name'>Will Wu</div>
					</div>
					<img src={add} alt='' />
				</div>
				<div className='newfriends-friend'>
					<div className='newfriends-friend-info'>
						<img src={icon} alt='' />
						<div className='newfriends-friend-name'>Will Wu</div>
					</div>
					<img src={add} alt='' />
				</div>
				<div className='newfriends-friend'>
					<div className='newfriends-friend-info'>
						<img src={icon} alt='' />
						<div className='newfriends-friend-name'>Will Wu</div>
					</div>
					<img src={add} alt='' />
				</div>
				<div className='newfriends-friend'>
					<div className='newfriends-friend-info'>
						<img src={icon} alt='' />
						<div className='newfriends-friend-name'>Will Wu</div>
					</div>
					<img src={add} alt='' />
				</div>
				<div className='newfriends-friend'>
					<div className='newfriends-friend-info'>
						<img src={icon} alt='' />
						<div className='newfriends-friend-name'>Will Wu</div>
					</div>
					<img src={add} alt='' />
				</div>
				<div className='newfriends-friend'>
					<div className='newfriends-friend-info'>
						<img src={icon} alt='' />
						<div className='newfriends-friend-name'>Will Wu</div>
					</div>
					<img src={add} alt='' />
				</div>
			</div>
		</div>
	);
};

export default NewFriends;
