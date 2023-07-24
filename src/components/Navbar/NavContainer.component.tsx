import { navbar, navbarContainer } from '~/components/Navbar/Navbar.styles'
import { NavbarMobileBackground } from '~/components/Navbar/NavbarMobileBackground'
import { NavLink } from '~/components/Navbar/NavLink.component'
import { navigation } from '~/constants/navigation'

interface Props {
  openNavigation: boolean
  pathname: string
  handleClick: () => void
}

export function NavContainer({ openNavigation, pathname, handleClick }: Props) {
  return (
    <nav className={navbar({ openNavigation })}>
      <div className={navbarContainer()}>
        {navigation.map((item) => (
          <NavLink key={item.id} {...item} pathname={pathname} onClick={handleClick} />
        ))}
      </div>
      <NavbarMobileBackground />
    </nav>
  )
}
