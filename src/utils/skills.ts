import { SkillIcons } from '~/components/Icons/SkillIcons'
import { Skill } from '~/types/projects'

export const skills: Array<Skill> = [
	{
		id: 'auth0',
		name: 'Auth 0',
		website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		logo: SkillIcons.auth0,
		worksWithSince: new Date(2019, 0, 1).toDateString()
	},
	{
		id: 'javascript',
		name: 'Javascript',
		website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		logo: SkillIcons.javascript,
		worksWithSince: new Date(2015, 0, 1).toDateString()
	}
]
