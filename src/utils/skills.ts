import { TECH_ICONS } from '~/components/TechCard/Icons'
import { Skill } from '~/types/projects'

export const skills: Array<Skill> = [
	{
		id: 'auth0',
		name: 'Auth 0',
		website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		logo: TECH_ICONS.auth0,
		worksWithSince: new Date(2019, 0, 1)
	},
	{
		id: 'javascript',
		name: 'Javascript',
		website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		logo: TECH_ICONS.javascript,
		worksWithSince: new Date(2015, 0, 1)
	}
]
