'use client'
import React, {SyntheticEvent, useState} from 'react';
import {useRouter} from 'next/navigation';

const NewPage = ({params}: { params : {story_id: string}} ) => {
		
	
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	
	const router = useRouter();
	
	console.log(params.story_id)


	const onClick = async (e: SyntheticEvent) => {
		
		e.preventDefault();

		const chapter = await fetch('http://localhost:3001/story/'+params.story_id+'/chapter',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		});
		
		const chapter_count = (await chapter.json()).rowCount + 1;
		
		console.log("NODE")
		console.log(chapter_count);
		
		const response = await fetch('http://localhost:3001/story/'+params.story_id+'/chapter/'+chapter_count,
		{
			method: 'POST',
			body: JSON.stringify({
				"title": title,
				"content": content,
			}),
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		});
				
		await router.push('/');
	}
	
	
	return (	
		<form onSubmit={onClick}>
			<input name="title" id="text" type="text" placeholder='Type Title here...' required
				onChange={e=>setTitle(e.target.value)}
			></input><br/>
			
			<input name="content" id="text" type="text" placeholder='Type content here...' required
				onChange={e=>setContent(e.target.value)}
			></input><br/>
			
			<button type="submit" onClick={onClick}> Submit </button>
		</form>
	
	)
}

export default NewPage