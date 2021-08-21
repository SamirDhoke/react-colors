import './slider-input.styles.scss';

const SliderInput = props => {
	const { classname, label, value, ...rest } = props;

	return (
		<div className={`slider-input ${classname}`}>
			<label>{ label } ({ value })</label>
			<input 
				value={value} 
				type='range' 
				{ ...rest }
			/>
		</div>
	)
}

export default SliderInput;