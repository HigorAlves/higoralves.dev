import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function () {
	const GET_URL = 'http://localhost:3000/api/medium/'

	const { data } = await axios.get(GET_URL)
	console.log(data, 'aqui')
	return data.posts
}
