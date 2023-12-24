import Link from 'next/link'
import StoryComponent from '../components/ui/StoryComponent'


interface Story {
	id: number;
	title: string;
}


const StoryPage = async () => {
	
	const res = await fetch('http://localhost:3001/story', {
		method: "GET",
		cache: 'no-store'});
		
	const stories : Story[] = (await res.json()).rows;
	
	console.log("HEELOO");
	console.log(stories);
	
	
	return (
		<div className="max-w-2xl ">
			<div className="flex flex-col space-y-4">
				{stories.map(story => <StoryComponent story={story}/>)}
			</div>
		</div>
	)
	
}

export default StoryPage