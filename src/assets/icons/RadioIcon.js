const CheckboxIcon = ({ checked }) => {
	if (checked) {
		return <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
			<rect width="20" height="20" x="1" y="1" fill="#fff" stroke="#1EA4CE" strokeWidth="2" rx="10"/>
			<path stroke="#1EA4CE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 9l-5.5 5L7 11.727"/>
		</svg>
	
	}

	return <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
		<rect width="20" height="20" x="1" y="1" fill="#fff" stroke="#DFDEE2" strokeWidth="2" rx="10"/>
	</svg>
};

export default CheckboxIcon;