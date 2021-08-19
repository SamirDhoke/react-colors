import Editor from '../../components/editor/editor.component';
import { createPalette } from '../../redux/palettes/palettes.actions';
import { selectPaletteNames } from '../../redux/palettes/palettes.selectors';
import { connect } from 'react-redux';

const NewPalette = props => {
	const { existingNames } = props;
	
	const handleSave = data => {
		// console.log('reached in the handle save of new palette.')
		const { title } = data;		
		if ( existingNames.find( en => en.title.toLowerCase() === title.toLowerCase() ) ) {
			throw new Error('This name is already taken. Please select a different name.');
		}
		props.createPalette(data);
		props.history.push('/');
	}

	return (
		<Editor
			save={handleSave}
			/>
	);
}

const mapStateToProps = state => ({
	existingNames : selectPaletteNames(state),
});

const mapDispatchToProps = dispatch => ({
	createPalette: palette => dispatch( createPalette(palette) )
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPalette);