import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const smStream = new SitemapStream({
			hostname: `https://${req.headers.host}`
		})

		const pageList = [
			'/about',
			'/',
			'/blog',
			'/courses',
			'/lessons',
			'/projects'
		]

		pageList.forEach(page => {
			smStream.write({
				url: page,
				changefreq: 'weekly',
				priority: 0.9
			})
		})
		smStream.end()
		const sitemapOutput = (await streamToPromise(smStream)).toString()

		res
			.writeHead(200, {
				'Content-Type': 'application/xml'
			})
			.end(sitemapOutput)
	} catch (e) {
		res.send(JSON.stringify(e))
	}
}
