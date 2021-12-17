import React from 'react'

import { MeshDistortMaterial, Sphere } from '@react-three/drei'

export function Ball() {
	return (
		<Sphere args={[1, 100, 200]} scale={2}>
			<MeshDistortMaterial
				color={'#ffd43b'}
				attach={'material'}
				distort={0.5}
			/>
		</Sphere>
	)
}
