import { ReactNode } from 'react'
import Logo from 'assets/logo.svg'
import IconHome from 'assets/icon-nav-home.svg'
import IconMovies from 'assets/icon-nav-movies.svg'
import IconTv from 'assets/icon-nav-tv-series.svg'
import IconBookmark from 'assets/icon-nav-bookmark.svg'
import IconDefaultUser from 'assets/icon-default-user.svg'
import { Link, Routes, useRouter } from 'blitz'
import clsx from 'clsx'

interface Props {
  children: ReactNode
}

const navLinks = [
  { href: Routes.Home(), Icon: IconHome },
  { href: Routes.Movies(), Icon: IconMovies },
  { href: Routes.TvSeries(), Icon: IconTv },
  { href: Routes.Bookmarked(), Icon: IconBookmark },
]

const Main = ({ children }: Props) => {
  const router = useRouter()

  return (
    <div className="flex h-screen flex-col p-6 lg:flex-row lg:p-8">
      <header className="-mx-6 -mt-6 mb-6 flex h-14 items-center bg-blue-semi p-4 md:mb-8 md:h-18 md:rounded-xl md:p-6 lg:row-span-2 lg:m-0 lg:mb-0 lg:h-full lg:w-24 lg:flex-col">
        <div className="shrink-0">
          <Logo />
        </div>
        <div className="flex grow justify-center space-x-6 lg:mt-20 lg:flex-col lg:justify-start lg:space-y-10 lg:space-x-0">
          {navLinks.map(({ href, Icon }) => (
            <Link key={href.pathname} href={href}>
              <a>
                <Icon
                  className={clsx('transition-colors hover:fill-white', {
                    'fill-white': router.pathname === href.pathname,
                  })}
                />
              </a>
            </Link>
          ))}
        </div>
        <div className="h-6 w-6 rounded-full border border-white md:h-8 md:w-8 lg:h-10 lg:w-10">
          <IconDefaultUser className="m-auto h-full w-4 md:w-5" />
        </div>
      </header>

      <div className="overflow-auto lg:ml-9">
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </div>
  )
}

export default Main
