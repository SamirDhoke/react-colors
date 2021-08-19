import React from 'react';
import Modal from '../modal/modal.component';
import CustomButton from '../custom-button/custom-button.component';
import './save-modal.styles.scss';

const SaveModal = props => {
	const {
		open,
		handleClose,
		paletteName,
		...rest
	} = props;

	const [title, updateTitle] = React.useState(paletteName || '');
	
	const handleSubmit = e => {
		e.preventDefault();
		try {
			rest.handleSave({ title });
		} catch (e) {
			alert(e.message);
		}		
	}

	return (
		<Modal
      open={open}
      handleClose={handleClose}
      >
      <div className='save-modal-content'>
      	<h2>Finish this last step</h2>
        <form onSubmit={ handleSubmit }>
					<div className='form-control'>
						<label>palette name</label>
						<input
							type='text'
							value={title}
							onChange={ ({target}) => updateTitle(target.value) }
							placeholder='e.g. Personal Palette'
							required
							/>									
					</div>
					<div className='form-control form-actions'>
						<CustomButton type='submit'>save</CustomButton>
						<CustomButton type='button' onClick={props.handleClose}>drop</CustomButton>
					</div>
				</form>
      </div>
    </Modal>
	)
}

export default SaveModal;