import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ProjectCard as Card } from '~/components/ProjectCard/ProjectCard.component'

export default {
	title: 'Design Library/Components/Card',
	component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const Primary = Template.bind({})

Primary.args = {
	title: 'Bubbles',
	isFeature: true,
	description:
		'It is a customer feedback and support platform designed to help businesses interact with their customers in a more personal and effective manner.'
}
