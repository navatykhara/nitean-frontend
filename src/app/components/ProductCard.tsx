import AddToCart from './AddToCart'
import AddUser from './AddUser'


//Create a login feature to test
//Authenticate current user
//Use current user data to send data back to backend
//Use NextAuth
const ProductCard = () => {
	return (
		<div>
			<AddToCart />
			<AddUser />
		</div>
	)
}

export default ProductCard