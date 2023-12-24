'use client'
import {useRouter} from 'next/navigation';
import React, {SyntheticEvent} from 'react';

const NewPage = () => {
		
	
	const router = useRouter();

	
	const onClick = async (e: SyntheticEvent) => {
		
		e.preventDefault();
	
		const response = await fetch('http://localhost:3001/logout',
		{
			method: 'POST',
			credentials: 'include'
		});
		
		await router.push('/');
		console.log(response);
	}
	
	
	return (
		<button type="submit" onClick={onClick}> Logout </button>
	)
}

export default NewPage