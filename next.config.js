/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		domains: ['res.cloudinary.com', 'images.ctfassets.net']
	},
	i18n: {
		locales: ['en-US', 'pt-BR'],
		defaultLocale: 'en-US'
	}
}
