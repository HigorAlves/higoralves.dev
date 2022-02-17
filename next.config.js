/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	productionBrowserSourceMaps: true,
	images: {
		domains: [
			'res.cloudinary.com',
			'images.ctfassets.net',
			'cdn-images-1.medium.com'
		]
	},
	i18n: {
		locales: ['en-US', 'pt-BR'],
		defaultLocale: 'en-US'
	}
}
