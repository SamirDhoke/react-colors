import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './modal.styles.scss';

const Modal = props => {
	const { open, handleClose } = props;

	if (!open) {
		return null;
	}

	return (
		<div className='modal-wrapper'>
			<div className='modal'>
				<div className='modal-content'>
					{props.children}
				</div>
				<span 
					className='modal-close-action'
					onClick={ handleClose }
				><FontAwesomeIcon icon={faTimes} /></span>
			</div>
		</div>
	)
}

export default Modal;