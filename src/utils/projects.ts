import BUBBLES_IMG from '~/assets/images/projects/bubbles/bubbles.png'
import TILED_IMG from '~/assets/images/projects/tiled/tiled.png'
import TUMBLE_IMG from '~/assets/images/projects/tumble/Tumble.png'
import { IBadgeCardProps } from '~/components/Card/Card.component'

export const PROJECTS: Array<IBadgeCardProps> = [
	{
		title: 'Bubbles',
		company: 'Notch Team',
		jobTitle: 'Senior Software Engineer',
		image: BUBBLES_IMG,
		isFeature: true,
		description:
			'It is a customer feedback and support platform designed to help businesses interact with their customers in a more personal and effective manner.'
	},
	{
		title: 'Tumble',
		company: 'Right Balance',
		jobTitle: 'Senior Software Engineer',
		image: TUMBLE_IMG,
		isFeature: true,
		description:
			'Tumble is a smart laundry system and delivery platform, predictive maintenance and IoT technology with the lowest downtime in the business.'
	},
	{
		title: 'Tiled',
		company: 'Zipdev',
		jobTitle: 'Senior Software Engineer',
		image: TILED_IMG,
		isFeature: true,
		description:
			'Tiled is a product that offers a customizable, collaborative workspace for teams to organize, prioritize, and track their work.'
	},
	{
		title: 'Hoag',
		company: 'X-Team',
		jobTitle: 'Senior Software Engineer',
		isFeature: false,
		description:
			'Tiled is a product that offers a customizable, collaborative workspace for teams to organize, prioritize, and track their work.'
	}
]
