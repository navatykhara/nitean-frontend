'use client'

import Link from 'next/link'
import DashboardComponent from '../components/ui/DashboardComponent'


interface Story {
	id: number;
	title: string;
}


const DashboardClient = async () => {
	
	
	const res = await fetch('http://localhost:3001/story/dashboard', {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		});
		
	const stories : Story[] = (await res.json()).rows;
	
	console.log("WORKS q212321")
	console.log(stories)
	
	if(stories == null){
		console.log("yes it is null")
		return (
			<div className="max-w-2xl ">
				<div className="flex flex-col space-y-4">
					<p> No stories added. </p>
				</div>
			</div>
		)
	}
	
	return (
			<div className="max-w-2xl ">
				<div className="flex flex-col space-y-4">
					{stories.map(story => <DashboardComponent key={story.id}story={story}/>)}
				</div>
			</div>
		)
	
}


export default DashboardClient