import classnames from 'classnames';
import trim from 'lodash/trim';
import { useRouter } from 'next/router';

import config from '../data/config.json';
import Link from './link';
import MobileMenu from './mobile-menu';
import ThemeSwitcher from './theme-switch';

function NavigationBarPages() {
  const { route } = useRouter();

  return (
    <nav className="hidden flex-row space-x-1 md:flex">
      {config.headbar.routes.map(item => {
        const _className = classnames(
          item.href === route && 'text-orange-500',
          ' hover:bg-gray-200 dark:hover:bg-gray-600 rounded',
          'block py-2 px-3 text-center link-underline',
        );

        return (
          <Link href={item.href} key={`NAVBAR-LINKS-${trim(item.name)}`}>
            <p className={_className}>{item.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}

export default function Header() {
  return (
    <header>
      <div className="headbar-default fixed w-screen backdrop-blur-lg">
        <div className="absolute bg-gray-500" />
        <div className="relative flex flex-row items-center justify-between py-2 px-6 text-2xl md:py-3 md:px-16">
          <div className="flex flex-row items-center">
            <MobileMenu />
            <NavigationBarPages />
          </div>
          <div className="flex flex-row">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
