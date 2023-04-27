import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage, connectStorageEmulator } from 'firebase/storage'

import { FIREBASE_CONFIG } from '~/config'

export default function firebase() {
	const app = initializeApp(FIREBASE_CONFIG)
	const firestore = getFirestore(app)
	const storage = getStorage(app)
	const auth = getAuth(app)

	const NODE_ENV = process.env.NODE_ENV
	const isLocalHost = NODE_ENV === 'development'

	if (isLocalHost) {
		try {
			connectAuthEmulator(auth, 'http://127.0.0.1:9099')
			connectFirestoreEmulator(firestore, 'localhost', 8080)
			connectStorageEmulator(storage, 'localhost', 9199)
		} catch (e) {}
	}

	return {
		firestore,
		storage,
		auth
	}
}
