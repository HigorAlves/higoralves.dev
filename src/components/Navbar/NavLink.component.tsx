import Link from 'next/link'
import { navLinks } from '~/components/Navbar/Navbar.styles'

interface Props {
  onlyMobile?: boolean
  url: string
  id: string
  title: string
  onClick: () => void
  pathname: string
}

export function NavLink({ url, title, id, onlyMobile, onClick, pathname }: Props) {
  const isURLEqualsToPathname = pathname === url

  function handleClick() {
    if (url.startsWith(pathname)) {
      handleClick()
    }
  }

  return (
    <Link
      className={navLinks({ onlyMobile, urlEqualsToPathname: isURLEqualsToPathname })}
      href={url}
      onClick={handleClick}
      key={id}
    >
      {title}
    </Link>
  )
}
