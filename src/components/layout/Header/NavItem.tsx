import Link from 'next/link'

interface INavItem {
  href: string
  title: string
}

export default function NavItem({ href, title }: INavItem): JSX.Element {
  return (
    <Link href={href}>
      <a className='text-text_contrast hover:text-secondary font-bold text-xl '>
        {title}
      </a>
    </Link>
  )
}
