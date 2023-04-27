export function isEmailValid(email: string) {
	// Email must not be empty
	if (!email) {
		return 'Email should not be empty.'
	}

	// Email must contain one @ symbol
	if (email.indexOf('@') === -1) {
		return 'Email should contain one @ symbol.'
	}

	// Email must contain one period
	if (email.indexOf('.') === -1) {
		return 'Email should contain one period.'
	}

	// Email must not start or end with a period or @ symbol
	if (
		email.startsWith('.') ||
		email.endsWith('.') ||
		email.startsWith('@') ||
		email.endsWith('@')
	) {
		return 'Email should not start or end with a period or @ symbol.'
	}

	// If all conditions are met, the email is considered valid
	return true
}
