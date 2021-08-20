import React from 'react';
import Modal from '../modal/modal.component';
import CustomButton from '../custom-button/custom-button.component';
import { toggleDeleteModal, deletePalette, resetDeletingPalette } from '../../redux/palettes/palettes.actions';
import { selectIsModalOpen, selectDeletingPalette } from '../../redux/palettes/palettes.selectors';
import { connect } from 'react-redux';
import './delete-modal.styles.scss';


const DeleteModal = props => {
	const { open, paletteName } = props;

	const [title, updateTitle] = React.useState('');
	
	const handleSubmit = e => {
		e.preventDefault();
		console.log(title, props.palette.title);
		if (title.toLowerCase() !== props.palette.title.toLowerCase()) {
			alert('the input does not matches the palette name.');
			return;
		}
		props.delete(props.palette);
		props.toggleOpen();
		updateTitle('');
	}

	const handleCancel = e => {
		props.toggleOpen();
		props.reset();
	}

	return (
		<Modal
      open={open}
      handleClose={props.toggleOpen}
      >
      <div className='delete-modal-content'>
      	<h2>Are you sure ?</h2>
        <form onSubmit={ handleSubmit }>
          <div className='form-control'>
            <label>Enter the palette name <b>{ props.palette ? props.palette.title : '' }</b> to continue</label>
            <input
              type='text'
              name='title'
              placeholder='palette name'
              value={title}
              onChange={({target}) => updateTitle(target.value)}
              />
          </div>
          <div className='form-control form-actions'>
          	<CustomButton type='submit'>Delete</CustomButton>
          	<CustomButton type='button' onClick={ handleCancel }>Cancel</CustomButton>
          </div>          
        </form>
      </div>
    </Modal>
	)
}

const mapStateToProps = state => ({
	open: selectIsModalOpen(state),
	palette: selectDeletingPalette(state)
})

const mapDispatchToProps = dispatch => ({
	toggleOpen: () => dispatch( toggleDeleteModal() ),
	delete : palette => dispatch( deletePalette(palette) ),
	reset: () => dispatch( resetDeletingPalette() )
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);