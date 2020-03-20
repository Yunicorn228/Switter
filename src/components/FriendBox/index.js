import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import delet from '../../images/Xshape.svg';
import classnames from 'classnames';
import Name from '../../helper/name';

const FriendBox = ({ displayBox, handleDisplayBox, user }) => {
	return (
		<div className={classnames('friendbox-container')}>
			<div className='friendbox-header'>
				<span>
					{user.firstName && Name.capitalizeName(user.firstName)}'s Friend
				</span>
				<input placeholder='Search for friends' type='text' />
			</div>

			{user.friends &&
				user.friends.map(friend => (
					<div className='friendbox-wrapper'>
						<div className='friendbox-content'>
							<div className='friendbox-front'>
								<img className='friendbox-icon' src={icon} alt='' />
								<div className='friendbox-info'>
									<div className='friendbox-name'>friend</div>
									<div className='friendbox-count'>
										{user.friends.length} friends
									</div>
								</div>
							</div>
							<img src={delet} alt='' />
						</div>
					</div>
				))}
		</div>
	);
};

export default FriendBox;
