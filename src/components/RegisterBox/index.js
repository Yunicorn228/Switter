import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import './index.scss';
import icon from '../../images/icon.svg';
import charvondown from '../../images/chavondown.svg';

const Register = ({ handleDisplayCode, displayCode }) => {
	const genderDropdwonElement = useRef(null);
	const genderInputElement = useRef(null);
	const [genderDisplay, setGenderDisplay] = useState(false);
	const [genderInput, setGenderInput] = useState('');

	const handleGenderDisplay = () => {
		const newgenderDisplay = !genderDisplay;
		setGenderDisplay(newgenderDisplay);
	};

	const handleSelectGender = gender => {
		setGenderInput(gender);
		setGenderDisplay(false);
	};

	const handleGenderClick = e => {
		if (
			genderDropdwonElement.current !== e.target &&
			genderInputElement.current !== e.target
		) {
			setGenderDisplay(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleGenderClick);
	}, []);

	return (
		<div
			className={classnames('register-container', {
				active: displayCode === 1,
				//1就是代表他妈的register
			})}>
			<div className='big-title'>Switter</div>
			<div className='register-wraper'>
				<div className='small-title'>Register</div>
				<input placeholder='Enter your E-mail address' type='text' />
				<input placeholder='Enter your password' type='password' />
				<input placeholder='Enter your first name' type='text' />
				<input placeholder='Enter your last name' type='text' />

				<div className='register-inline'>
					<div
						ref={genderDropdwonElement}
						className={classnames('register-gender-select', {
							displaygender: genderDisplay,
						})}>
						<div
							onClick={() => handleSelectGender('Male')}
							className='register-gender-male'>
							Male
						</div>
						<div
							onClick={() => handleSelectGender('Female')}
							className='register-gender-female'>
							Female
						</div>
					</div>

					<img src={charvondown} alt='' />
					<input placeholder='Enter your age' type='text' />
					<input
						ref={genderInputElement}
						onClick={() => handleGenderDisplay()}
						readOnly='readonly'
						value={genderInput}
						placeholder='Enter your gender'
						type='text'
					/>
				</div>
				<input placeholder='Enter your street address' type='text' />
				<input placeholder='Enter your city' type='text' />
				<input placeholder='Enter your state' type='text' />
				<input placeholder='Enter your zip code' type='text' />
				<div className='register-icon'>
					<div className='register-icon-title'>
						<span className='register-icon-discription'>profile picture</span>
						<span className='register-icon-upload'>Upload</span>
					</div>
					<img src={icon} alt='' />
				</div>
				<button className='bf-blue-button' onClick={() => handleDisplayCode(2)}>
					register
				</button>
			</div>
		</div>
	);
};

export default Register;
