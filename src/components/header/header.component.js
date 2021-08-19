import './header.styles.scss'
import { withRouter } from 'react-router-dom';
import { setEditingPalette } from '../../redux/editor/editor.actions';
import { selectNewPaletteTemplate } from '../../redux/palettes/palettes.selectors';
import { connect } from 'react-redux';

const Header = props => {
  const startEditingNewPalette = e => {
    props.setEditingPalette( props.template );
    props.history.push('/palettes/new')
  };

  return (
    <header>
      <div className='brand' onClick={ e => props.history.push('/') }>
        <h3>color factory</h3>
      </div>
      <div className='menu'>
        <span className='menu-item' onClick={ startEditingNewPalette }>
          create
        </span>          
      </div>
    </header>
  );
}

const mapStateToProps = state => ({
  template : selectNewPaletteTemplate(state)
})

const mapDispatchToProps = dispatch => ({
  setEditingPalette: template => dispatch( setEditingPalette( template ) )
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);