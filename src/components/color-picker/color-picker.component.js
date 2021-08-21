import React from 'react';
import chroma from 'chroma-js';
import CustomButton from '../custom-button/custom-button.component';
import { HexColorPicker } from 'react-colorful';
import { addColorToPalette, clearPalette } from '../../redux/editor/editor.actions';
import { selectActivePalette } from '../../redux/editor/editor.selectors';
import { selectAllColors } from '../../redux/palettes/palettes.selectors';
import { selectRandomColor } from '../../utils';
import { connect } from 'react-redux';
import './color-picker.styles.scss';

const ColorPicker = props => {
	const [color, setColor] = React.useState({
		code: '#ffffff',
		name: ''
	});	

	const handleSubmit = e => {
		e.preventDefault();	
		try {
			if ( props.palette.colors.find( c => c.name === color.name ) ) {
				throw new Error('a color with this name already exists in current palette.');
			}
			addColor(color.code, color.name);
		}	catch (e) {
			alert(e.message);
		} finally {
			setColor({ code: '#ffffff', name: '' });
		}
	}

	const addColor = (code, name) => {
		const color = {
			color: chroma(code).hex().toString(),
			name
		};		
		props.addColor(color);
	}

	const addRandomColor = e => {
		try {
			const random = selectRandomColor(props.allColors, props.palette.colors);
			props.addColor(random);
		}	catch (e) {
			alert('no more colors choices left.')
		}	
	}

	return (
		<div className='color-picker'>
			<div className='action-buttons'>
				<CustomButton onClick={props.clear}>clear</CustomButton>
				<CustomButton onClick={addRandomColor}>random</CustomButton>						
			</div>			
			<form onSubmit={ handleSubmit }>
				<div className='form-control'>
					<HexColorPicker 
						color={color.code}
						onChange={(value) => setColor({ ...color, code: value })}
					/>
				</div>
				<div className='form-control'>
					<input 
						value={color.name}
						onChange={({target}) => setColor({ ...color, name: target.value })}
						name='name'
						placeholder='e.g. smokewhite'
						required
					/>
				</div>
				<CustomButton type='submit'>Add</CustomButton>
			</form>			
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	addColor: color => dispatch( addColorToPalette(color) ),
	clear: () => dispatch( clearPalette() )	
})

const mapStateToProps = state => ({
	allColors: selectAllColors(state),
	palette: selectActivePalette(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);