import React, { createContext, useState, useEffect, ReactNode } from 'react'

import { getAnalytics, Analytics, logEvent } from 'firebase/analytics'
import { getApps, initializeApp } from 'firebase/app'
import { useRouter } from 'next/router'

import { firebaseConfig } from '~/services/Firebase/setupFirebase'

if (getApps().length === 0) {
	initializeApp(firebaseConfig)
}

export const FirebaseContext = createContext(null)

export const FirebaseTrackingProvider = (props: { children: ReactNode }) => {
	const router = useRouter()

	const [tracking, setTracking] = useState<Analytics | any>(null)

	useEffect(() => {
		setTracking(getAnalytics())

		const handleRouteChange = () => {
			if (!tracking) {
				return
			}

			logEvent(getAnalytics(), 'page_view')
		}

		router.events.on('routeChangeStart', handleRouteChange)

		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
		}
	}, [tracking])

	return (
		<FirebaseContext.Provider value={tracking}>
			{props.children}
		</FirebaseContext.Provider>
	)
}
