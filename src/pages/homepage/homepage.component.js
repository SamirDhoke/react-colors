import PaletteBrief from '../../components/palette-brief/palette-brief.component';
import DeleteModal from '../../components/delete-modal/delete-modal.component';
import Header from '../../components/header/header.component';
import { selectPalettes } from '../../redux/palettes/palettes.selectors';
import { connect } from 'react-redux';
import './homepage.styles.scss';

const Homepage = props => {
	const { palettes } = props;

	return (
    <div className='homepage'>
      <Header />
      <div className='bg' />
  		<div className='palettes-container'>
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
        <DeleteModal/>
      </div>
    </div>
	)
}

const mapStateToProps = state => ({
  palettes: selectPalettes(state)  
});

export default connect(mapStateToProps)(Homepage);