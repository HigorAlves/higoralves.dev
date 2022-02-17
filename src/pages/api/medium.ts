import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import readTime from 'reading-time'
import { parseString } from 'xml2js'

import { dateFormatSmall } from '~/utils/dateFormats'
const POSTS_URL = 'https://medium.com/feed/@higoralvesdev'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	let parsedData: any
	const mediumRSS = await axios
		.get(POSTS_URL)
		.then(response => response.data)
		.catch(response => res.end(response.data))

	parseString(mediumRSS, (err, res2) => {
		parsedData = res2.rss.channel[0].item
	})

	const posts = parsedData.map((post: any) => {
		const content = post['content:encoded'][0]
		const { text } = readTime(content)
		const linkRegex =
			/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/+#-]*[\w@?^=%&\/+#-]).*?(jpeg|png|gif)/
		const imagesRegex = linkRegex.exec(content) ?? []
		const image = imagesRegex.length > 0 ? imagesRegex[0] : ''

		return {
			title: post['title'][0],
			link: post['link'][0],
			content,
			timeToRead: text,
			date: dateFormatSmall(post['pubDate'], 'en-US'),
			image
		}
	})
	res.status(200).json({ posts })
}
