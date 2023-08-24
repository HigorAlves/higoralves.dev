// A faulty API route to test Sentry's error monitoring
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  throw new Error('Sentry Example API Route Error')
  // eslint-disable-next-line no-unreachable
  return res.status(200).json({ name: 'John Doe' })
}
