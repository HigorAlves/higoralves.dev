import { useProducts } from '~/hooks'

export default function DarkTest() {
	const { status, data, error, isFetching } = useProducts({ order: 'RANKING' })

	return <h1>HIHIHIHI</h1>
}
