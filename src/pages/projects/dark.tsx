import { useState } from 'react'

import { useProducts } from '~/hooks'

export default function DarkTest() {
	const [page, setPage] = useState(5)
	const { status, data, error, isFetching } = useProducts('RANKING', page)

	return <h1>HIHIHIHI</h1>
}
