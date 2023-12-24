'use client'

import React, {SyntheticEvent, useState} from 'react';
import {useRouter} from 'next/navigation';

const LoginForm = () => {
	
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	const router = useRouter();
	
	const onClick = async (e: SyntheticEvent) => {
		
		e.preventDefault();
	
	
		console.log(username);
		console.log(password)
		const response = await fetch('http://localhost:3001/login',
		{
			method: 'POST',
			body: JSON.stringify({
				"username": username,
				"password": password
			}),
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		
		await router.push('/');
		console.log(response);
	}
	
	
	return (
		<div>
		<form className="max-w-sm mx-auto" onSubmit={onClick}>
			<div className="mb-5">
				<label
					htmlFor="username"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Your username</label
				>
				<input
					type="username"
					id="username"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="username"
					required
					onChange={e=>setUsername(e.target.value)}
				/>
			</div>
			<div className="mb-5">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Your password</label
				>
				<input
					type="password"
					id="password"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
					onChange={e=>setPassword(e.target.value)}
				/>
			</div>
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
		</div>

	)
}

export default LoginForm