import { StaticImageData } from 'next/image'

import { ICompany } from '~/types/companies.type'

export type Skill = {
  id: string
  name: string
  website: string
  worksWithSince: string
  logo: Element | string
}

export type ProjectType = {
  id: string
  slug: string
  title: string
  thumbnail?: string
  description: string
  about: string
  isFeature: boolean
  skillsUsed: string[]
  responsibilities: string[]
  carousel: Array<StaticImageData>
  company: ICompany
  duration: {
    startDate: Date | string
    endDate: Date | string
  }
}
