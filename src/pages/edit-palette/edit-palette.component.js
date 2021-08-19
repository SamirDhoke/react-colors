import Editor from '../../components/editor/editor.component';
import { updatePalette } from '../../redux/palettes/palettes.actions';
import { selectPaletteNames } from '../../redux/palettes/palettes.selectors';
import { connect } from 'react-redux';

const EditPalette = props => {
	const { existingNames } = props;

	const handleSave = data => {
		// console.log('reached in the handle save of new palette.')
		const { title, id } = data;
		const existing = existingNames.find(
			en => en.id !== id && en.title.toLowerCase() === title.toLowerCase()
		);
		// console.log(existing);
		if ( existing ) {
			throw new Error('This name is already taken. Please select a different name.');
		}
		props.updatePalette(data);
		props.history.push('/');
	}

	return (
		<Editor save={handleSave}/>
	);
}

const mapStateToProps = state => ({
	existingNames : selectPaletteNames(state),
});

const mapDispatchToProps = dispatch => ({
	updatePalette: palette => dispatch( updatePalette(palette) )
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPalette);