import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';

const MyFriends = () => {
	return (
		<div className='myfriends-container'>
			<div className='myfriends-title'>My Friends</div>
			<div className='myfriends-list-container'>
				<div className='myfriends-list-content'>
					<img src={icon} alt='' />
					<div className='myfriends-name'>Sunny Wang</div>
				</div>
				<div className='myfriends-list-content'>
					<img src={icon} alt='' />
					<div className='myfriends-name'>Sunny Wang</div>
				</div>
				<div className='myfriends-list-content'>
					<img src={icon} alt='' />
					<div className='myfriends-name'>Sunny Wang</div>
				</div>
				<div className='myfriends-list-content'>
					<img src={icon} alt='' />
					<div className='myfriends-name'>Sunny Wang</div>
				</div>
				<div className='myfriends-list-content'>
					<img src={icon} alt='' />
					<div className='myfriends-name'>Sunny Wang</div>
				</div>
				<div className='myfriends-list-content'>
					<img src={icon} alt='' />
					<div className='myfriends-name'>Sunny Wang</div>
				</div>
				<div className='myfriends-list-content'>
					<img src={icon} alt='' />
					<div className='myfriends-name'>Sunny Wang</div>
				</div>
			</div>
			<div className='myfriends-page-select'>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</div>
		</div>
	);
};

export default MyFriends;
