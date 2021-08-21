import './select-input.styles.scss';

const SelectInput = props => {
	const { 
		className,
		label,
		name,
		options,
		...rest 
	} = props;

	return (
		<div className={`select-input ${className}`}>
			<label>{ label }</label>
			<select name={name} {...rest} >
				{ Object.keys(options).map(key => <option key={key} name={name} value={options[key]}>{key}</option>) }
			</select>
		</div>
	)
}

export default SelectInput;