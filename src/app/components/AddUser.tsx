'use client'


const AddUser = () => {
	
	const submitUser = async() => {
		const response = await fetch('http://localhost:3001/user',
		{
			method: 'POST',
			body: JSON.stringify({
				"username": "Totes",
				"email": "totse@gmail.com",
				"password": "1234"
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
			<button onClick={submitUser}> Add User </button>
		</div>
	)
}

export default AddUser