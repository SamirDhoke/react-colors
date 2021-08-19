import './custom-button.styles.scss';

const CustomButton = props => {
	const { children, ...rest } = props;
	return (
		<button
			className='custom-button'
			{...rest}
			>{children}</button>
	);
}

export default CustomButton;