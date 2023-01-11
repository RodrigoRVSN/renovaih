import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NavGroup } from './NavGroup';

export function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function handleOpenMenu(): void {
    setMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [router]);

  return (
    <header className="bg-primary flex flex-col md:flex-row items-center justify-between px-xxxlg py-xmd relative">
      <Link href="/">
        <a className="text-3xl text-text_contrast font-bold">Renovaih</a>
      </Link>

      <NavGroup menuOpen={menuOpen} />

      <button
        data-testid="toggle__button"
        type="button"
        className="absolute bg-card block md:hidden p-xs right-xxs space-y-xxs  rounded shadow cursor-pointer"
        onClick={() => handleOpenMenu()}
      >
        <span className="block w-xmd h-xxs bg-primary animate-pulse" />
        <span className="block w-xmd h-xxs bg-primary animate-pulse" />
        <span className="block w-xmd h-xxs bg-primary animate-pulse" />
      </button>
    </header>
  );
}
