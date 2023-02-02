import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Footer } from "~/components";
import { LINKS } from "~/layout/base.layout";

export default {
	title: 'Design Library/Components/Footer',
	component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer links={LINKS} />

export const Primary = Template.bind({})

Primary.args = {}
