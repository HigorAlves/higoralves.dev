export function isPasswordStrong(password: string) {
	if (password.length < 8) {
		return 'Password must be at least 8 characters long'
	}

	if (!/[A-Z]/.test(password)) {
		return 'Password must contain at least one uppercase letter'
	}

	if (!/[a-z]/.test(password)) {
		return 'Password must contain at least one lowercase letter'
	}

	if (!/\d/.test(password)) {
		return 'Password must contain at least one digit'
	}

	if (!/[@$!%*?&]/.test(password)) {
		return 'Password must contain at least one special character'
	}

	// If all conditions are met, the password is considered strong
	return true
}