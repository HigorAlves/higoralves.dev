/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	productionBrowserSourceMaps: true,
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'br']
	},
	images: {
		dangerouslyAllowSVG: true,
		domains: ['media.graphassets.com', 'odindesignthemes.com']
	}
}
