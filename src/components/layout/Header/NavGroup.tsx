/* eslint-disable no-restricted-globals */
import { ButtonSignIn } from '@App/components/elements/ButtonSignIn';
import { ButtonToggleTheme } from '@App/components/elements/ButtonToggleTheme';
import NavItem from './NavItem';

interface INavGroup {
  menuOpen: boolean;
}

export function NavGroup({ menuOpen }: INavGroup): JSX.Element {
  return (
    <nav
      className={`flex ${
        menuOpen ? 'flex-col my-xxs mt-lg' : 'hidden'
      } md:flex gap-md items-center`}
    >
      <ButtonToggleTheme />
      <NavItem href="/" title="Início" />
      <NavItem href="/projects" title="Projetos" />

      <ButtonSignIn />
    </nav>
  );
}
