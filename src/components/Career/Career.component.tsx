import { Text, Timeline, Title } from '@mantine/core'
import Link from 'next/link'

import { CompanyName, ICompany } from '~/types/companies'
import { COMPANIES } from '~/utils/companies'

export function Career() {
	const companyKey = Object.keys(COMPANIES) as CompanyName[]
	const companies = companyKey.map(
		(key: CompanyName) => COMPANIES[key] as ICompany
	)

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
							<Link href={company.website || '/projects'} target={'_blank'}>
								<Text variant='link' component='span' inherit>
									{company.name}
								</Text>
							</Link>{' '}
							- {company.address.city}, {company.address.country}
						</Text>
						<Text size='xs' mt={4}>
							<>
								{company.duration.startDate} - {company.duration.endDate}
							</>
						</Text>
					</Timeline.Item>
				))}
			</Timeline>
		</>
	)
}
