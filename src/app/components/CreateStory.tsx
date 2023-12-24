'use client'

//get current user as a parameter, use those parameters to submit a story
const CreateStory = () => {
	
	const submitStory = async() => {
		const response = await fetch('http://localhost:3001/createStory',
		{
			method: 'POST',
			body: JSON.stringify({
				title: "Mushoku Tensei",
				author_id: 1,
				description: "BLAH BLAH BLAH",
				genre: "Romance",
				cover_image: "ASASDA"
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		
		const data = await response.json();
		console.log(data);
	}
	
	return (
		<div>
			<button onClick={submitStory}> Add User </button>
		</div>
	)
}

export default CreateStory