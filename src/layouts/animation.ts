export const containerVariants = {
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
		y: -20,
		transition: {
			ease: 'easeInOut'
		}
	}
}

export const itemVariants = {
	hidden: {
		opacity: 0,
		y: -30
	},
	visible: {
		opacity: 1,
		y: 0
	},
	exit: {
		opacity: 0,
		y: -30
	}
}
