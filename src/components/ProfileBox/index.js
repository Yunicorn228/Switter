import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import classnames from 'classnames';
import Name from '../../helper/name';

const ProfileBox = ({ displayBox, handleDisplayBox, user }) => {
	return (
		<div className={classnames('profilebox-container')}>
			<div className='profilebox-banner'>
				{user.firstName && Name.capitalizeName(user.firstName)}'s Profile
			</div>
			<div className='profilebox-wrapper'>
				<div className='profilebox-info'>
					<div className='profilebox-title'>My name</div>

					<div className='profilebox-content-wrapper'>
						<div className='profilebox-content'>
							{user.firstName && Name.capitalizeName(user.firstName)}
							{` `}
							{user.lastName && Name.capitalizeName(user.lastName)}
						</div>
						<div className='profilebox-change'>Change</div>
					</div>
				</div>
				<div className='profilebox-info'>
					<div className='profilebox-title'>My number</div>

					<div className='profilebox-content-wrapper'>
						<div className='profilebox-content'>{user.phone && user.phone}</div>
						<div className='profilebox-change'>Change</div>
					</div>
				</div>
				<div className='profilebox-info'>
					<div className='profilebox-title'>My home address</div>

					<div className='profilebox-content-wrapper'>
						<div className='profilebox-content'>17161 alva rd 92127</div>
						<div className='profilebox-change'>Change</div>
					</div>
				</div>
				<div className='profilebox-info'>
					<div className='profilebox-title'>My Relationship Status</div>

					<div className='profilebox-content-wrapper'>
						<div className='profilebox-content'>In relationship</div>
						<div className='profilebox-change'>Change</div>
					</div>
				</div>
				<div className='profilebox-info'>
					<div className='profilebox-title-wrapper'>
						<div className='profilebox-title'>My Profile Picture</div>
						<span className='profilebox-upload'>Upload</span>
					</div>
					<img src={user.avatar} alt='' />
				</div>
			</div>
		</div>
	);
};

export default ProfileBox;
