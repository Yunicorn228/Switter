import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import delet from '../../images/Xshape.svg';
import classnames from 'classnames';

const FriendBox = ({ displayBox, handleDisplayBox }) => {
	return (
		<div className={classnames('friendbox-container')}>
			<div className='friendbox-header'>
				<span>His Friend</span>
				<input placeholder='Search for friends' type='text' />
			</div>
			<div className='friendbox-wrapper'>
				<div className='friendbox-content'>
					<div className='friendbox-front'>
						<img className='friendbox-icon' src={icon} alt='' />
						<div className='friendbox-info'>
							<div className='friendbox-name'>Will Wu</div>
							<div className='friendbox-count'>112 Friends</div>
						</div>
					</div>

					<img src={delet} alt='' />
				</div>
				<div className='friendbox-content'>
					<div className='friendbox-front'>
						<img className='friendbox-icon' src={icon} alt='' />
						<div className='friendbox-info'>
							<div className='friendbox-name'>Will Wu</div>
							<div className='friendbox-count'>112 Friends</div>
						</div>
					</div>

					<img src={delet} alt='' />
				</div>
				<div className='friendbox-content'>
					<div className='friendbox-front'>
						<img className='friendbox-icon' src={icon} alt='' />
						<div className='friendbox-info'>
							<div className='friendbox-name'>Will Wu</div>
							<div className='friendbox-count'>112 Friends</div>
						</div>
					</div>

					<img src={delet} alt='' />
				</div>
				<div className='friendbox-content'>
					<div className='friendbox-front'>
						<img className='friendbox-icon' src={icon} alt='' />
						<div className='friendbox-info'>
							<div className='friendbox-name'>Will Wu</div>
							<div className='friendbox-count'>112 Friends</div>
						</div>
					</div>

					<img src={delet} alt='' />
				</div>
				<div className='friendbox-content'>
					<div className='friendbox-front'>
						<img className='friendbox-icon' src={icon} alt='' />
						<div className='friendbox-info'>
							<div className='friendbox-name'>Will Wu</div>
							<div className='friendbox-count'>112 Friends</div>
						</div>
					</div>

					<img src={delet} alt='' />
				</div>
				<div className='friendbox-content'>
					<div className='friendbox-front'>
						<img className='friendbox-icon' src={icon} alt='' />
						<div className='friendbox-info'>
							<div className='friendbox-name'>Will Wu</div>
							<div className='friendbox-count'>112 Friends</div>
						</div>
					</div>

					<img src={delet} alt='' />
				</div>
				<div className='friendbox-content'>
					<div className='friendbox-front'>
						<img className='friendbox-icon' src={icon} alt='' />
						<div className='friendbox-info'>
							<div className='friendbox-name'>Will Wu</div>
							<div className='friendbox-count'>112 Friends</div>
						</div>
					</div>

					<img src={delet} alt='' />
				</div>
				<div className='friendbox-content'>
					<div className='friendbox-front'>
						<img className='friendbox-icon' src={icon} alt='' />
						<div className='friendbox-info'>
							<div className='friendbox-name'>Will Wu</div>
							<div className='friendbox-count'>112 Friends</div>
						</div>
					</div>

					<img src={delet} alt='' />
				</div>
				<div className='friendbox-content'>
					<div className='friendbox-front'>
						<img className='friendbox-icon' src={icon} alt='' />
						<div className='friendbox-info'>
							<div className='friendbox-name'>Will Wu</div>
							<div className='friendbox-count'>112 Friends</div>
						</div>
					</div>

					<img src={delet} alt='' />
				</div>
				<div className='friendbox-content'>
					<div className='friendbox-front'>
						<img className='friendbox-icon' src={icon} alt='' />
						<div className='friendbox-info'>
							<div className='friendbox-name'>Will Wu</div>
							<div className='friendbox-count'>112 Friends</div>
						</div>
					</div>

					<img src={delet} alt='' />
				</div>
			</div>
		</div>
	);
};

export default FriendBox;
