import Editor from '../../components/editor/editor.component';
import { createPalette } from '../../redux/palettes/palettes.actions';
import { selectPalettes } from '../../redux/palettes/palettes.selectors';
import { connect } from 'react-redux';

const NewPalette = props => {
	const { palettes } = props;
	
	const handleSave = data => {		
		const { title } = data;		
		if ( palettes.find( palette => palette.title === title ) ) {
			throw new Error('This name is already taken. Please select a different name.');
		}
		props.create(data);
		props.history.push('/');
	}

	return (
		<Editor
			save={handleSave}
			/>
	);
}

const mapStateToProps = state => ({
	palettes : selectPalettes(state),
});

const mapDispatchToProps = dispatch => ({
	create: palette => dispatch( createPalette(palette) )
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPalette);