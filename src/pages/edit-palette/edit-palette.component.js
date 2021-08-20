import Editor from '../../components/editor/editor.component';
import { updatePalette } from '../../redux/palettes/palettes.actions';
import { selectPalettes } from '../../redux/palettes/palettes.selectors';
import { connect } from 'react-redux';

const EditPalette = props => {
	const { palettes } = props;

	const save = data => {		
		const { title, id } = data;
		const existing = palettes.find(palette => palette.title === title && palette.id !== id);		
		if ( existing ) {
			throw new Error('This name is already taken. Please select a different name.');
		}
		props.update(data);
		props.history.goBack();
	}

	return (
		<Editor save={save}/>
	);
}

const mapStateToProps = state => ({
	palettes : selectPalettes(state),
});

const mapDispatchToProps = dispatch => ({
	update: palette => dispatch( updatePalette(palette) )
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPalette);