import PaletteBrief from '../../components/palette-brief/palette-brief.component';
import DeleteModal from '../../components/delete-modal/delete-modal.component';
import { selectPalettes, selectIsModalOpen, selectDeletingPalette } from '../../redux/palettes/palettes.selectors';
import { toggleDeleteModal, deletePalette, resetDeletingPalette } from '../../redux/palettes/palettes.actions';
import { connect } from 'react-redux';
import './homepage.styles.scss';

const Homepage = props => {
	const { palettes } = props;

  const handleDeletingPalette = () => {
    if (props.deletingPalette) {
      props.deletePalette(props.deletingPalette);
    }
    props.resetDeletingPalette();
    props.toggleDeleteModal();
  }

	return (
		<div className='homepage'>
      <div className='palettes'>
        {
          palettes.map(
            ( palette ) => (
              <PaletteBrief 
                key={palette.id}
                palette={palette}
              />
            )
          )          
        }
      </div>
      <DeleteModal
        open={props.isModalOpen}
        handleClose={props.toggleDeleteModal}
        deletePalette={handleDeletingPalette}
        paletteName={props.deletingPalette.title || ''}
        />
    </div>
	)
}

const mapStateToProps = state => ({
  palettes: selectPalettes(state),
  isModalOpen: selectIsModalOpen(state),
  deletingPalette: selectDeletingPalette(state)
});

const mapDispatchToProps = dispatch => ({
  toggleDeleteModal: () => dispatch(toggleDeleteModal()),
  deletePalette: palette => dispatch(deletePalette(palette)),
  resetDeletingPalette: () => dispatch(resetDeletingPalette())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);