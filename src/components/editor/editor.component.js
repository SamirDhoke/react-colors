import { 
	addColorToPalette, 
	removeColorFromPalette, 
	toggleSaveModal,
	clearPalette,
	resetEditingPalette
} from '../../redux/editor/editor.actions';
import { 
	selectActivePalette, 
	selectIsModalOpen	
} from '../../redux/editor/editor.selectors';
import { selectAllColors } from '../../redux/palettes/palettes.selectors';
import { connect } from 'react-redux';
import SaveModal from '../save-modal/save-modal.component';
import ColorBox from '../color-box/color-box.component';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import chroma from 'chroma-js';
import { selectRandomColor } from '../../utils';
import './editor.styles.scss';

const Editor = props => {
	const { palette, isModalOpen } = props;
	console.log(palette);
	const handleSave = data => {
		// get the data and combine it and give to props.save
		const { title } = data;
		const updatedPalette = {
			...palette,
			title			
		};
		props.save(updatedPalette);
		props.toggleSaveModal();
	}

	const handleDrop = e => {
		props.resetEditingPalette();
		props.history.push('/');
	}

	const addColor = e => {
		e.preventDefault();
		const {colorCode, colorName} = e.target;
		const color = {
			color: '',
			name: ''
		};
		try {
			color.color = chroma(colorCode.value).hex().toString();
			color.name = colorName.value;
			props.addColor(color);
		} catch (e) {
			alert(e.message);
		}
	}

	const addRandomColor = e => {
		const random = selectRandomColor(props.allColors, palette.colors);
		props.addColor(random);
	}

	if (!palette) {
		return null;
	}

	return (
		<div className='editor'>
			<div className='config'>
				<div className='config-item'>
					<h2>{palette.title}</h2>
				</div>
				<div className='config-item'>
					<CustomButton onClick={props.toggleSaveModal}>save</CustomButton>
					<CustomButton onClick={handleDrop}>drop</CustomButton>
				</div>
			</div>
			<div className='editing-space'>
				<div className='color-picker'>
					<div className='smaller-buttons'>
						<CustomButton onClick={props.clearPalette}>clear</CustomButton>
						<CustomButton onClick={addRandomColor}>random</CustomButton>						
					</div>
					<div className='color-picker-component'>
						<form onSubmit={addColor}>
							<div className='form-control'>
								<input 
									name='colorCode' 
									placeholder='e.g. #f4f4f4'
									required/>								
							</div>
							<div className='form-control'>
								<input 
									name='colorName' 
									placeholder='e.g. smokewhite'
									required/>
							</div>
							<CustomButton>Add</CustomButton>
						</form>
					</div>
				</div>
				<div className='colors'>
					{
						palette.colors.map( color => <ColorBox key={color.name} color={color}/> )
					}
				</div>
			</div>
			<SaveModal 
				open={props.isModalOpen}
				handleClose={props.toggleSaveModal}
				handleSave={handleSave}				
				paletteName={props.palette.title}
				/>
		</div>
	)
}

const mapStateToProps = state => ({
	isModalOpen: selectIsModalOpen(state),
	palette: selectActivePalette(state),
	allColors: selectAllColors(state)
});

const mapDispatchToProps = dispatch => ({
	addColor: color => dispatch(addColorToPalette(color)),
	removeColor: color => dispatch(removeColorFromPalette(color)),
	clearPalette: () => dispatch(clearPalette()),
	resetEditingPalette: () => dispatch(resetEditingPalette()),
	toggleSaveModal: () => dispatch(toggleSaveModal())
})

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Editor)
);