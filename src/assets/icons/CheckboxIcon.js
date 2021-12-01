const CheckboxIcon = ({ checked }) => {
	if (checked) {
		return <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
			<rect width="22" height="22" fill="#1EA4CE" rx="2"/>
			<path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16.667 7l-7.334 7.333L6 11"/>
		</svg>
	}

	return <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
		<rect width="22" height="22" fill="#fff" rx="2"/>
	</svg>
};

export default CheckboxIcon;