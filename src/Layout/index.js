import React from 'react';
import Main from '../routers/Main/Container';
import Footer from './Footer';
import Header from './Header/container';

const Layout = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
};

export default Layout;
