import { setActivePalette } from '../../redux/palettes/palettes.actions';
import { setEditingPalette } from '../../redux/editor/editor.actions';
import { setDeletingPalette, toggleDeleteModal } from '../../redux/palettes/palettes.actions';

import { generatePalette } from '../../utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './palette-brief.styles.scss';

const PaletteBrief = props => {
  const { palette, history } = props;  
    
  const {
    colors,
    title    
  } = palette;

  const viewPalette = (e) => {
    const paletteName = title.toLowerCase().split(' ').join('-')
    const modifiedPalette = generatePalette(palette);
    props.viewPalette(modifiedPalette);
    history.push(`/palettes/view/${paletteName}`);
  }

  const editPalette = e => {
    const paletteName = title.toLowerCase().split(' ').join('-')    
    props.editPalette(palette);
    history.push(`/palettes/edit/${paletteName}`); 
  }

  const deletePalette = e => {
    props.setDeletingPalette(palette);
    props.toggleDeleteModal();
  }

  return (
    <div className='palette-brief'>
      <div className='title-wrapper'>
        <span 
          className='title'
          onClick={ viewPalette }
          >{title}</span>        
      </div>      
      <div className='colors'>
        {
          colors.map(
            color => (
              <span 
                key={color.name}
                className='color'
                style={{ backgroundColor: color.color }}
              />
            )
          )
        }        
      </div>
      <div className='actions'>
        <span 
          className='edit' 
          onClick={ editPalette }
          >edit</span>
        <span 
          className='delete'
          onClick={deletePalette}
          >delete</span>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  editPalette: palette => dispatch( setEditingPalette(palette) ),
  viewPalette: palette => dispatch( setActivePalette(palette) ),
  setDeletingPalette: palette => dispatch( setDeletingPalette(palette) ),
  toggleDeleteModal: () => dispatch( toggleDeleteModal() )
});

export default withRouter( connect(null, mapDispatchToProps)(PaletteBrief) );