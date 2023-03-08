import { List, Space, ThemeIcon, Title as BaseTitle } from '@mantine/core'
import { IconBrandApple } from '@tabler/icons'

import { Title } from '~/components'

export default function UsesPage() {
	return (
		<>
			<Title
				title={'Tools. Apps. Gear'}
				order={1}
				gradient={{ from: 'orange', to: 'yellow', deg: 150 }}
				subtitle={'The tools I use.'}
			/>
			<Space h={40} />

			<BaseTitle order={2}>Apps</BaseTitle>
			<List
				spacing='sm'
				size='sm'
				center
				mt={'xl'}
				mb={40}
				icon={
					<ThemeIcon color='dark[7]' size={24} radius='xl'>
						<IconBrandApple size={16} />
					</ThemeIcon>
				}
			>
				<List.Item>
					Things 3 - Task manager that helps me plan my day, and make real
					progress toward my goals.
				</List.Item>
				<List.Item>
					Notion - Notion is the connected workspace where better, faster work
					happens.
				</List.Item>
				<List.Item>
					Grammarly - A must-have tool for non-native English speakers like me.
				</List.Item>
				<List.Item>
					1Password - Easiest way to store and use strong passwords.
				</List.Item>
				<List.Item>
					Github - Where I host my code. I also run CI/CD pipelines via GitHub
					Actions.
				</List.Item>
				<List.Item>
					Calendly - For: Grab a time whenever link with consulting fees
					built-in.
				</List.Item>
				<List.Item>
					Webstorm - Integrated development environment for JavaScript and
					related technologies.
				</List.Item>
			</List>
		</>
	)
}
