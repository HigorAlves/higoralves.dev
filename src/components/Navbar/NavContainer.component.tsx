import { styles } from '~/components/Navbar/Navbar.styles'
import { NavbarMobileBackground } from '~/components/Navbar/NavbarMobileBackground'
import { NavLink } from '~/components/Navbar/NavLink.component'
import { navigation } from '~/constants/navigation'

interface Props {
  openNavigation: boolean
  pathname: string
  handleClick: () => void
}

export function NavContainer({ openNavigation, pathname, handleClick }: Props) {
  const { navbar, navContainer } = styles({ openNavigation })

  return (
    <nav className={navbar()}>
      <div className={navContainer()}>
        {navigation.map((item) => (
          <NavLink key={item.id} {...item} pathname={pathname} onClick={handleClick} openNavigation={openNavigation} />
        ))}
      </div>
      <NavbarMobileBackground />
    </nav>
  )
}
