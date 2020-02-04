const urls = [
'http://jsonplaceholder.typicode.com/posts',
'http://jsonplaceholder.typicode.com/comments',
'http://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
	try {
		const [ posts, comments, albums ] = await Promise.all(urls.map(url => 
		fetch(url).then(resp => resp.json())))
		console.log('posts', posts)
		console.log('comments',comments)
		console.log('albums',albums)
	} catch (err) {
		console.log(err)
	}
}