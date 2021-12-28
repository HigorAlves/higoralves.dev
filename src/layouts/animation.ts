export const containerVariants = {
	hidden: {
		opacity: 0,
		y: -20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
			ease: 'easeInOut',
			when: 'beforeChildren',
			delayChildren: 1.5,
			staggerDirection: 1
		}
	},
	exit: {
		opacity: 0,
		y: -20,
		transition: {
			ease: 'easeInOut'
		}
	}
}

export const itemVariants = {
	hidden: {
		opacity: 0,
		y: -20
	},
	visible: {
		opacity: 1,
		y: 0
	},
	exit: {
		opacity: 0,
		y: -20
	}
}
