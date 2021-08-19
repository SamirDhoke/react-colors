const SliderInput = props => {
	const { classname, label, value, ...rest } = props;

	return (
		<div className={`slider-input ${classname}`}>
			<span>{ label } ({ value })</span>
			<input 
				value={value} 
				type='range' 
				{ ...rest }
			/>
		</div>
	)
}

export default SliderInput;