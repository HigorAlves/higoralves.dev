import Link from 'next/link'
import { styles } from '~/components/Navbar/Navbar.styles'

interface Props {
  onlyMobile?: boolean
  url: string
  id: string
  title: string
  onClick: () => void
  pathname: string
  openNavigation: boolean
}

export function NavLink({ url, title, id, onlyMobile, onClick, pathname, openNavigation }: Props) {
  const isURLEqualsToPathname = pathname === url
  const { navLink } = styles({ openNavigation, urlEqualsToPathname: isURLEqualsToPathname, onlyMobile })

  function handleClick() {
    if (url.startsWith(pathname)) {
      handleClick()
    }
  }

  return (
    <Link className={navLink()} href={url} onClick={handleClick} key={id}>
      {title}
    </Link>
  )
}
