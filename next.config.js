/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')

module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	productionBrowserSourceMaps: true,
	i18n,
	images: {
		domains: [
			'res.cloudinary.com',
			'images.ctfassets.net',
			'cdn-images-1.medium.com'
		]
	}
}
