import React from 'react';
import Modal from '../modal/modal.component';
import CustomButton from '../custom-button/custom-button.component';
import './delete-modal.styles.scss';

const DeleteModal = props => {
	const {
		open,
		handleClose,
		paletteName,
		...rest
	} = props;

	const [title, updateTitle] = React.useState('');
	
	const handleSubmit = e => {
		e.preventDefault();
		if (title.toLowerCase() !== paletteName.toLowerCase()) {
			alert('the input does not matches the palette name.');
			return;
		}
		rest.deletePalette()
		updateTitle('');
	}

	return (
		<Modal
      open={open}
      handleClose={handleClose}
      >
      <div className='delete-modal-content'>
      	<h2>Are you sure ?</h2>
        <form onSubmit={ handleSubmit }>
          <div className='form-control'>
            <label>Enter the palette name <b>{ paletteName }</b> to continue</label>
            <input
              type='text'
              name='title'
              placeholder='palette name'
              />
          </div>
          <div className='form-control form-actions'>
          	<CustomButton>Delete</CustomButton>
          	<CustomButton>Cancel</CustomButton>
          </div>          
        </form>
      </div>
    </Modal>
	)
}

export default DeleteModal;