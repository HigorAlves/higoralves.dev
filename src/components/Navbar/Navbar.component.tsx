import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { Logo } from '~/components'
import { NavContainer } from '~/components/Navbar/NavContainer.component'
import { styles } from './Navbar.styles'
import Button from '../Button'

export function Navbar() {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false)
  const pathname = usePathname()
  const { container, wrapper } = styles({ openNavigation })

  function toggleNavigation() {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  function handleClick() {
    enablePageScroll()
    setOpenNavigation(false)
  }

  useEffect(() => {
    enablePageScroll()
    setOpenNavigation(false)
  }, [])

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <Logo />
        <NavContainer openNavigation={openNavigation} pathname={pathname} handleClick={handleClick} />

        <Button data-id={'mobile-menu-toggle'} className="ml-auto lg:hidden" onClick={toggleNavigation} px="px-3">
          <svg className="overflow-visible" width="20" height="12" viewBox="0 0 20 12">
            <rect
              className="origin-center transition-all"
              y={openNavigation ? '5' : '0'}
              width="20"
              height="2"
              rx="1"
              fill="white"
              transform={`rotate(${openNavigation ? '45' : '0'})`}
            />
            <rect
              className="origin-center transition-all"
              y={openNavigation ? '5' : '10'}
              width="20"
              height="2"
              rx="1"
              fill="white"
              transform={`rotate(${openNavigation ? '-45' : '0'})`}
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}
