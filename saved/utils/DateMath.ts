export class DateMath {
	calculateTimeSinceStartDate(startDate: Date) {
		// Get the current date
		const currentDate = new Date()

		// Calculate the difference in milliseconds between the start date and current date
		const timeDiff = currentDate.getTime() - startDate.getTime()

		// Convert milliseconds to years and months
		const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365))
		const months = Math.floor(
			(timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
		)

		return `${years} years and ${months} months`
	}

	calculateTimeBetweenDates(startDate: Date, endDate: Date) {
		// Calculate the difference in milliseconds between the start date and end date
		const timeDiff = endDate.getTime() - startDate.getTime()

		// Convert milliseconds to years and months
		const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365))
		const months = Math.floor(
			(timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
		)

		return `${years} years and ${months} months`
	}
}
