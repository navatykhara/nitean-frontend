import Link from 'next/link'

const ChapterTable = ({chapters}) => {
	console.log(chapters)
	if(chapters == null){
		return (
		<table className="min-w-full bg-white border border-gray-300">
			<thead>
				<tr>
					<th className="py-2 px-4 border-b">Chapter Number</th>
					<th className="py-2 px-4 border-b">Date Created</th>
				</tr>
			</thead>
		</table>)
	}
	
	
	return (
		<table className="min-w-full bg-white border border-gray-300 table-auto">
			<thead>
				<tr>
					<th className="py-2 px-4 border-b">Chapter Number</th>
					<th className="py-2 px-4 border-b">Date Created</th>
				</tr>
			</thead>
			
			
			<tbody>
				{chapters.map(chapter => (
					<tr key={chapter.id}>
					<td className="py-2 px-4 border-b text-center">
						<Link href={"/story/"+chapter.story_id+"/chapter/"+chapter.chapter_number} key={chapter.id}> {chapter.chapter_number} </ Link>
						</td>
					<td className="py-2 px-4 border-b text-center">{chapter.published_date}</td>
					</tr>
				))}
			</tbody>
			
		</table>
	)
}

export default ChapterTable