import React, { useState, useRef, useEffect } from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import reportimg from '../../images/report.svg';
import heart from '../../images/heart.svg';
import commenticon from '../../images/comment.svg';
import eye from '../../images/eye.svg';
import classnames from 'classnames';
import Comment from '../../components/Comment';

const Post = () => {
	const [showComment, setCommentShowStatus] = useState(false);
	const [showReport, setReportShowStatus] = useState(false);
	const reportDropdownElement = useRef(null);
	const reportButtonElement = useRef(null);

	const handleDisplayComment = () => {
		const newShowComment = !showComment;
		setCommentShowStatus(newShowComment);
	};

	const handleReport = () => {
		const newShowReport = !showReport;
		setReportShowStatus(true);
	};

	const handleScreenClick = e => {
		if (
			reportDropdownElement.current !== e.target &&
			reportButtonElement.current !== e.target
		) {
			setReportShowStatus(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleScreenClick);
	}, []);

	return (
		<React.Fragment>
			<div className='post-container'>
				<div
					ref={reportDropdownElement}
					className={classnames('post-report-drop', { active: showReport })}>
					Report
				</div>

				<div className='post-header'>
					<div className='post-title'>
						<img src={icon} alt='' />

						<div className='post-block'>
							<div className='post-sender'>
								<div className='post-sender-name'>Sheldon Yu</div>
								<div className='post-sender-feeling'>is feeling motivited</div>
							</div>
							<div className='post-time'> 7 hours ago</div>
						</div>
					</div>
					<img
						ref={reportButtonElement}
						onClick={() => handleReport()}
						src={reportimg}
						alt=''
					/>
				</div>

				<div className='post-content'>Moto, moto, got alot of motivation!</div>

				<div className='post-reviews'>
					<div className='post-likes'>
						<img src={heart} alt='' />
						999+
					</div>
					<div onClick={() => handleDisplayComment()} className='post-comment'>
						<img src={commenticon} alt='' />
						999+
					</div>
					<div className='post-views'>
						<img src={eye} alt='' />
						999+
					</div>
				</div>
				{showComment && <Comment />}
			</div>
		</React.Fragment>
	);
};

export default Post;
