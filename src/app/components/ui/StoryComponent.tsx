import Link from 'next/link'

const StoryComponent = ({story}) => {
	console.log(story);
	return (
		<div className="flex p-4">
		
			{/* Image on the right */}
			<div className="flex-shrink-0">
				<img src="https://cdn2.thecatapi.com/images/ebv.jpg" alt="Info" className="w-24 h-24 object-cover rounded-md" />
			</div>
			
			{/* Information on the left */}
			
			<div className="ml-4">
				<h2 className="text-xl font-bold">
					<Link href={"/story/"+story.id} key={story.id}> {story.title} </ Link>
				</h2>
				<p className="mt-2 text-gray-600">{story.description}</p>
			</div>
		</div>
	)
}

export default StoryComponent