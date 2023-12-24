import ChapterTable from "../../components/ui/ChapterTable"

interface User {
	id: number;
	username: string;
}


const Story = async ( {params}: { params : {story_id : string}} ) => {
	
	const res = await fetch('http://localhost:3001/story/'+params.story_id, {
		method: "GET",
		cache: 'no-store'});
		
	const fiction = (await res.json()).rows[0];
	
	
	const c_res = await fetch('http://localhost:3001/story/'+params.story_id+'/chapter', {
		method: "GET",
		cache: 'no-store'});
		
	const ch = (await c_res.json()).rows;
	
	console.log(ch);
	

	return (
		<>
		
		
			<div className="flex justify-center items-center gap-4">
				
				<div>
					<div className="block max-w-sm p-7 bg-gray-200 border border-gray-200">
						<p className="text-lg ml-28 text-gray-700 dark:text-gray-400"> {fiction.title} </p>
					</div>
					
					<div className="block max-w-sm p-6 bg-white border border-gray-200 shadow dark:bg-gray-800">
						<div className="columns-3">
						<img src="https://cdn2.thecatapi.com/images/ebv.jpg" alt="Info" className="w-24 h-48 object-cover rounded-md -mt-20" />
						<p className="font-normal text-gray-700 dark:text-gray-400"> {fiction.description} </p>
						<p className="text-sm text-gray-700 dark:text-gray-400"> {fiction.genre} </p>
						</div>
					</div>
				</div>
				
				<div className="gap-y-4">
					<div>
						<div className="block max-w-sm p-1 bg-gray-200 border border-gray-200">
							<p className="font-normal text-gray-700 dark:text-gray-400"> Description </p>
						</div>
						
						<div className="block max-w-sm p-6 bg-white border border-gray-200 shadow dark:bg-gray-800">
							<p className="font-normal text-gray-700 dark:text-gray-400"> {fiction.description} </p>
						</div>
					</div>
					
					<div>
						<div className="block max-w-sm p-1 bg-gray-200 border border-gray-200">
							<p className="font-normal text-gray-700 dark:text-gray-400"> Creator </p>
						</div>
						
						<div className="block max-w-sm p-6 bg-white border border-gray-200 shadow dark:bg-gray-800">
							<p className="font-normal text-gray-700 dark:text-gray-400"> {fiction.author_id} </p>
						</div>
					</div>
					
				</div>
			
			</div>

			<ChapterTable chapters={ch} />
		</>
	)
}

export default Story; 