import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { parseString } from 'xml2js'

const POSTS_URL = 'https://medium.com/feed/@higoralvesdev'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
	axios
		.get(POSTS_URL)
		.then(response => {
			parseString(response.data, (err, res2) => {
				res
					.status(200)
					.json({ posts: JSON.stringify(res2.rss.channel[0].item) })
			})
		})
		.catch(response => res.end(response.data))

	res.status(200).json({ name: 'John Doe' })
}
