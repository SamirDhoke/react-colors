import SaveModal from '../save-modal/save-modal.component';
import ColorBox from '../color-box/color-box.component';
import CustomButton from '../custom-button/custom-button.component';
import ColorPicker from '../color-picker/color-picker.component';
import { resetEditingPalette, toggleSaveModal } from '../../redux/editor/editor.actions';
import { selectActivePalette	} from '../../redux/editor/editor.selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './editor.styles.scss';

const Editor = props => {
	const { palette } = props;
	// console.log(palette);

	const save = data => {	
		const { title } = data;		
		props.save({ ...palette, title });
		props.toggleOpen();
	}

	const drop = e => {
		props.reset();
		props.history.goBack();
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
					<CustomButton onClick={props.toggleOpen}>save</CustomButton>
					<CustomButton onClick={drop}>drop</CustomButton>
				</div>
			</div>
			<div className='editing-space'>
				<ColorPicker />
				<div className='colors'>
					{ palette.colors.map( color => <ColorBox key={color.name} color={color}/> ) }
				</div>
			</div>
			<SaveModal save={save}/>
		</div>
	)
}

const mapStateToProps = state => ({
	palette: selectActivePalette(state),	
});

const mapDispatchToProps = dispatch => ({	
	reset: () => dispatch( resetEditingPalette() ),
	toggleOpen: () => dispatch( toggleSaveModal() )
})

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Editor)
);