import Link from 'next/link'
import DashboardComponent from '../components/ui/DashboardComponent'
import DashboardClient from '../components/DashboardClient'


interface Story {
	id: number;
	title: string;
}


async function getDashboardContent(){
	
	const res = await fetch('http://localhost:3001/story/dashboard', {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
	});
		
	const stories : Story[] = (await res.json()).rows;
	
	console.log("WH")
	console.log(stories)

	return stories;
	
}


const UsersPage = async () => {
	
	let stories = await getDashboardContent();
	
	console.log(stories == null)
	console.log(stories)
	
	return (
			<DashboardClient />
		
		)
	
}


export default UsersPage