import { Text, Timeline, Title } from '@mantine/core'
import Link from 'next/link'

import { COMPANIES } from '~/utils/companies'

export function Career() {
	const companies = COMPANIES.filter(company => company.show)
	return (
		<>
			<Title order={3}>Career</Title>
			<Timeline active={0} bulletSize={24} lineWidth={2} mt={'lg'}>
				{companies.map(company => (
					<Timeline.Item
						key={company.name}
						bulletSize={28}
						bullet={<company.icon size={16} />}
						title={company.job}
					>
						<Text color='dimmed' size='sm'>
							<Link href={company.website} target={'_blank'}>
								<Text variant='link' component='span' inherit>
									{company.name}
								</Text>
							</Link>{' '}
							- {company.city}, {company.country}
						</Text>
						<Text size='xs' mt={4}>
							<>
								{company.startDate} - {company.endDate}
							</>
						</Text>
					</Timeline.Item>
				))}
			</Timeline>
		</>
	)
}
