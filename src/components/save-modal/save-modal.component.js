import React from 'react';
import Modal from '../modal/modal.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectIsModalOpen, selectActivePalette } from '../../redux/editor/editor.selectors';
import { toggleSaveModal, resetEditingPalette } from '../../redux/editor/editor.actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './save-modal.styles.scss';

const SaveModal = props => {
	const {
		open,
		palette		
	} = props;

	const [title, updateTitle] = React.useState(palette ? palette.title : '');
	
	const handleSubmit = e => {
		e.preventDefault();
		try {
			props.save({ title });
		} catch (e) {
			alert(e.message);
		}		
	}

	const handleCancel = e => {
		props.reset();
		props.history.goBack();
	}

	return (
		<Modal
      open={open}
      handleClose={props.toggleOpen}
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
						<CustomButton type='button' onClick={handleCancel}>drop</CustomButton>
					</div>
				</form>
      </div>
    </Modal>
	)
}

const mapStateToProps = state => ({
	open: selectIsModalOpen(state),
	palette: selectActivePalette(state)
})

const mapDispatchToProps = dispatch => ({
	toggleOpen: () => dispatch( toggleSaveModal() ),
	reset: () => dispatch( resetEditingPalette() )
})

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(SaveModal)
);