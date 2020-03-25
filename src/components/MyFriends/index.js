import React, { useState, useEffect } from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import userService from '../../services/user';

const MyFriends = ({ user }) => {
	const [friendArr, setFriendArr] = useState([]);
	console.log(friendArr);
	console.log(user);
	useEffect(() => {
		const userToken = window.localStorage.getItem('token');
		const findFriend = async () => {
			try {
				const myfriends = await userService.findFriendById(
					user._id,
					1,
					userToken,
				);
				if (myfriends.data.success) {
					setFriendArr(myfriends.data.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};

		findFriend();
	}, [user]);

	return (
		<div className='myfriends-container'>
			<div className='myfriends-title'>My Friends</div>
			<div className='myfriends-list-container'>
				{friendArr &&
					friendArr.map(friend => (
						<div className='myfriends-list-content'>
							<img src={friend.avatar} alt='fr' />
							<div className='myfriends-name'>{friend.lastName}</div>
						</div>
					))}
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
