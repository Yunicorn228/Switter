import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import classnames from 'classnames';

const ProfileBox = ({ displayBox, handleDisplayBox }) => {
	return (
		<div className={classnames('profilebox-container')}>
			<div className='profilebox-banner'>His Profile</div>
			<div className='profilebox-wrapper'>
				<div className='profilebox-info'>
					<div className='profilebox-title'>My name</div>

					<div className='profilebox-content-wrapper'>
						<div className='profilebox-content'>Sheldon Yu</div>
						<div className='profilebox-change'>Change</div>
					</div>
				</div>
				<div className='profilebox-info'>
					<div className='profilebox-title'>My number</div>

					<div className='profilebox-content-wrapper'>
						<div className='profilebox-content'>3476547566</div>
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
					<img src={icon} alt='' />
				</div>
			</div>
		</div>
	);
};

export default ProfileBox;
