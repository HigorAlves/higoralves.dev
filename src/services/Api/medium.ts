import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function () {
	const BASE_URL = process.env.NEXT_PUBLIC_URL
	const MEDIUM_URL = `${BASE_URL}/api/medium/`

	const { data } = await axios.get(MEDIUM_URL)
	return data.posts
}
