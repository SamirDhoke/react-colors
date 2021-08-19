import './color-box.styles.scss';

const ColorBox = props => {
	const { color, mode='color' } = props;
	
	const goToColor = e => {
		props.push(`/colors/${color.name}`);
	}

	return (
		<div className='color-box' key={ color.id } onClick={goToColor}>
			<div 
				className='color-bg'
				style={{ backgroundColor: color.color }}
				/>
			<span className='color-name'>{ color.name }</span>
			<span className='color-code'>{ color[mode] }</span>
		</div>
	)
}

export default ColorBox;