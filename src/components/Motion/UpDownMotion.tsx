import React from 'react'

import { motion } from 'framer-motion'

import { containerVariants } from '~/layouts/animation'

type Props = {
	children: React.ReactNode
}

export function UpDownMotion({ children }: Props) {
	return (
		<motion.div
			initial={'hidden'}
			animate={'visible'}
			exit={'exit'}
			variants={containerVariants}
		>
			{children}
		</motion.div>
	)
}
