const SelectInput = props => {
	const { 
		classname,
		label,
		name,
		options,
		...rest 
	} = props;

	return (
		<div className={`select-input ${classname}`}>
			<span>{ label }</span>
			<select name={name} {...rest} >
				{ Object.keys(options).map(key => <option key={key} name={name} value={options[key]}>{key}</option>) }
			</select>
		</div>
	)
}

export default SelectInput;