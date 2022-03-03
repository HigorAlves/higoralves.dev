import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (): Promise<Array<any>> {
	const MEDIUM_URL = `/api/medium/`
	const response = await axios.get(MEDIUM_URL).catch(error => error)

	if (response.status !== 200) {
		return []
	}
	return response.data
}
