import React from 'react';

import '../assets/tailwind.css';
import pageRoot from '../utils/pageRoot';

const OnBoarding: React.FC = () => {
	return (
		<div className='h-screen w-screen bg-blue-900 flex justify-center items-center flex-col'>
			<h1 className=' text-4xl text-white'>Welcome to Open Source Pal</h1>
			<p>Make Contributing to open source easier</p>
		</div>
	);
};

pageRoot(OnBoarding);
