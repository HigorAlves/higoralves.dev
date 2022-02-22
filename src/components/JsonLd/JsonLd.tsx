import React from 'react'

type BasicSchema = {
	'@context': string
	'@type': string
}

type SearchBox = BasicSchema & {
	name: string
	url: string
	potentialAction: {
		'@type': string
		target: string
		'query-input': string
	}
}

type BlogPosting = BasicSchema & {
	mainEntityOfPage: {
		'@type': string
		'@id': string
	}
	headline: string
	description: string
	image: string
	author: {
		'@type': string
		name: string
	}
	publisher: {
		'@type': string
		name: string
		logo: {
			'@type': string
			url: string
			width: number
			height: number
		}
	}
	datePublished: string
	dateModified: string
}

type Breadcrumb = BasicSchema & {
	itemListElement: [
		{
			'@type': string
			position: number
			name: string
			item: string
		}
	]
}

type Video = BasicSchema & {
	name: string
	description: string
	thumbnailUrl: string
	uploadDate: string
	duration: string
	contentUrl: string
	embedUrl: string
}

type Product = BasicSchema & {
	name: string
	image: string
	description: string
	brand: string
	offers: {
		'@type': string
		url: string
		priceCurrency: string
		price: string
		priceValidUntil: string
		availability: string
		itemCondition: string
	}
	aggregateRating: {
		'@type': string
		ratingValue: string
		bestRating: string
		worstRating: string
		ratingCount: string
	}
}

type Person = BasicSchema & {
	name: string
	url: string
	image: string
	sameAs: Array<string>
	jobTitle: string
	worksFor: {
		'@type': string
		name: string
	}
}

type Organization = BasicSchema & {
	name: string
	alternateName: string
	url: string
	logo: string
	sameAs: Array<string>
}

type FAQ = BasicSchema & {
	mainEntity: [
		{
			'@type': string
			name: string
			acceptedAnswer: {
				'@type': string
				text: string
			}
		}
	]
}

type Props =
	| SearchBox
	| BlogPosting
	| Breadcrumb
	| Video
	| Product
	| Person
	| Organization
	| FAQ

export function JsonLD(schema: Props) {
	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	)
}
