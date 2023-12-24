import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
	<main>
		<Link href="/account/register"> Register </Link> <br />
		<Link href="/account/login"> Login </Link> <br />
		<Link href="/account/logout"> Logout </Link> <br />
		
		<br />

		<Link href="/dashboard/create"> Create </Link> <br />
		<Link href="/dashboard"> Dashboard </Link> <br />
		<Link href="/story"> Story </Link>

	</main>
  )
}
