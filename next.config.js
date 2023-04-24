/** @type {import('next').NextConfig} */

const nextConfig = {
	// Configure pageExtensions to include md and mdx
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	// Optionally, add any other Next.js config below
	reactStrictMode: true,
	trailingSlash: true,
	productionBrowserSourceMaps: true
}

module.exports = nextConfig
