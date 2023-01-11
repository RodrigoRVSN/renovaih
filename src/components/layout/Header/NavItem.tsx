import Link from 'next/link';

interface INavItem {
  href: string;
  title: string;
}

export default function NavItem({ href, title }: INavItem): JSX.Element {
  return (
    <Link href={href}>
      <a className="hover:text-button font-bold text-xl text-text_contrast transite">
        {title}
      </a>
    </Link>
  );
}
