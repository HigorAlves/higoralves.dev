import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
	title: 'Design Library/Atoms/Button',
	component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button />

export const Primary = Template.bind({})

Primary.args = {
	primary: true,
	label: 'Button'
}
