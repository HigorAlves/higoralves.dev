/* eslint-disable no-unused-vars */

import { TablerIconsProps } from '@tabler/icons-react'

export enum LocationType {
  REMOTE = 'Remote',
  HYBRID = 'Hybrid',
}

export enum EmploymentType {
  FULLTIME = 'Full-time',
  CONTRACTOR = 'Contractor',
}

export type CompanyName =
  | 'doare'
  | 'ask'
  | '123milhas'
  | 'zipdev'
  | 'notchteam'
  | 'righbalance'
  | 'xteam'
  | 'toroinvestimentos'
  | 'takeblip'
  | 'monetus'
  | 'natahouse'
  | 'fabricademvp'
  | 'perallis'
  | 'fiocruz'
  | 'edulivre'
  | 'tradersclub'
  | 'nkey'
  | 'unesco'
  | 'ufsj'

export interface ICompany {
  name: string
  job: string
  website: string | null
  icon: (props: TablerIconsProps) => any
  show: boolean
  address: {
    city: string
    country: string
  }
  duration: {
    startDate: string
    endDate: string
  }
  contract: {
    locationType: LocationType
    employmentType: EmploymentType
  }
}
