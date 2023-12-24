const { notFound } = require('next/navigation');


const Chapter = async ( {params}: { params : {story_id: integer, chapter_id : integer}} ) => {
	
	
	try{
		const res = await fetch('http://localhost:3001/story/'+params.story_id+'/chapter/'+params.chapter_id, {
			method: "GET",
			cache: 'no-store'});
			
		
		const fiction = (await res.json()).rows[0];
		console.log(fiction);

		return (
			<>
				<h1> {fiction.title} </h1>
				<h1> {fiction.story_id} </h1>
				<h1> {fiction.id} </h1>
				<h1> {fiction.content} </h1>
				<h1> {fiction.published_date} </h1>
				<h1> {fiction.chapter_number} </h1>
				<p>{new Date().toLocaleTimeString()} </p>
				<ul>
				</ul>
			</>
		)
			
	}catch (e){
		return notFound();
	}
}

export default Chapter; 