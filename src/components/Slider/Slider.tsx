import React from 'react'

import Image from 'next/image'
import SwiperCore, { Pagination, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'

interface Props {
	carrousel: [
		{
			url: string
			title: string
		}
	]
}

export function Slider({ carrousel }: Props) {
	SwiperCore.use([Pagination, Keyboard])

	return (
		<Swiper
			slidesPerView={'auto'}
			centeredSlides={true}
			spaceBetween={30}
			grabCursor
			pagination={{
				clickable: true
			}}
			loop
			navigation
		>
			{carrousel.map(({ url, title }) => (
				<SwiperSlide key={url}>
					<div style={{ borderRadius: '8px', overflow: 'hidden' }}>
						<Image
							src={url}
							width={1920}
							height={1080}
							layout={'responsive'}
							alt={title}
							objectFit={'cover'}
							objectPosition={'center'}
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
