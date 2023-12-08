import { Box, RingProgress } from '@mantine/core'
import Image from 'next/image'

export function RingPhoto() {
  const BoxStyle = (top: number | null, left: number | null, bottom: number | null, right: number | null) => ({
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    animation: 'float 2s infinite',
    ...(top != null && { top }),
    ...(left != null && { left }),
    ...(bottom != null && { bottom }),
    ...(right != null && { right }),
  })

  const ImageStyle = (top: number | null, left: number | null, bottom: number | null, right: number | null) => ({
    position: 'absolute',
    width: 30,
    height: 30,
    animation: 'float 2s infinite',
    background: 'white',
    margin: 10,
    ...(top != null && { top }),
    ...(left != null && { left }),
    ...(bottom != null && { bottom }),
    ...(right != null && { right }),
  })

  return (
    <Box style={{ position: 'relative' }}>
      <RingProgress size={400} thickness={7} roundCaps sections={[{ value: 100, color: 'indigo' }]} />
      <Image
        src={'/images/me/Profile.jpeg'}
        alt={''}
        width={340}
        height={340}
        style={{ position: 'absolute', top: '7.6%', left: '7.2%', borderRadius: '100%' }}
      />
      <FloatingBox style={BoxStyle(50, 60, null, null)} />
      <FloatingBox style={BoxStyle(50, 60, null, null)} animationDuration="2.5s" />
      <LogoImg src={'/images/techs/typescript.svg'} alt="Typescript" style={ImageStyle(50, 60, null, null)} />
      <FloatingBox style={BoxStyle(null, null, 50, 60)} />
      <FloatingBox style={BoxStyle(null, null, 50, 60)} animationDuration="2.5s" />
      <LogoImg src={'/images/techs/reactjs.svg'} alt="React" style={ImageStyle(null, null, 50, 60)} />
      <FloatingBox style={BoxStyle(50, null, null, 60)} />
      <FloatingBox style={BoxStyle(50, null, null, 60)} animationDuration="2.5s" />
      <LogoImg src={'/images/techs/nodejs.svg'} alt="Nodejs" style={ImageStyle(50, null, null, 60)} />
      <FloatingBox style={BoxStyle(null, 60, 50, null)} />
      <FloatingBox style={BoxStyle(null, 60, 50, null)} animationDuration="2.5s" />
      <LogoImg src={'/images/techs/swift.png'} alt="Swift" style={ImageStyle(null, 60, 50, null)} />
    </Box>
  )
}

// @ts-ignore
function FloatingBox({ style, animationDuration = '2s' }) {
  return <Box bg="white" style={{ ...style, animation: `float ${animationDuration} infinite` }} />
}

// @ts-ignore
function LogoImg({ src: Logo, alt, style }) {
  return <Image src={Logo} width={30} height={30} alt={alt} style={{ ...style }} />
}
