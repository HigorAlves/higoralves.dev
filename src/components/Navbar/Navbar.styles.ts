import { tv } from 'tailwind-variants'

export const styles = tv({
  slots: {
    container: 'fixed left-0 top-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm',
    wrapper: 'flex h-[4.75rem] items-center px-5 lg:h-[5.25rem] lg:px-7.5 xl:px-10',
    navbar: 'fixed bottom-0 left-0 right-0 top-[4.8125rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent',
    navContainer: 'relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row',
    navLink:
      'relative block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12',
  },
  variants: {
    openNavigation: {
      true: {
        container: 'bg-n-8',
        navbar: 'flex',
      },
      false: {
        container: 'bg-n-8/90 backdrop-blur-sm',
        navbar: 'hidden',
      },
    },
    onlyMobile: {
      true: {
        navLink: 'lg:hidden',
      },
    },
    urlEqualsToPathname: {
      true: {
        navLink: 'z-2 lg:text-n-1',
      },
      false: {
        navLink: 'lg:text-n-1/50',
      },
    },
  },
})
