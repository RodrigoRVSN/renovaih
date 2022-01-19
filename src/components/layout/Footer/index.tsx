import Image from 'next/image'
import { socialList } from './Footer.config'

export function Footer(): JSX.Element {
  return (
    <footer className='bg-primary px-xxs md:px-xxxlg py-xmd flex flex-col'>
      <section className='flex flex-col md:flex-row items-center justify-between'>
        <span className='text-4xl text-text_contrast font-bold'>Renovaih</span>

        <nav className='flex flex-col gap-lg p-lg'>
          {socialList.map((item) => (
            <a
              className='flex gap-md items-center text-text_contrast hover:text-opacity-60'
              href={item.href}
              key={item.id}
              target='_blank'
              rel='noreferrer'
            >
              <Image
                alt={`Logo ${item.title}`}
                src={item.src}
                width='32'
                height='32'
              />
              {item.title}
            </a>
          ))}
        </nav>
      </section>

      <span className='mx-auto text-center'>
        ©Copyright Rodrigo 2022 -{' '}
        <a href='https://github.com/rodrigorvsn'>github@rodrigorvsn</a>
      </span>
    </footer>
  )
}
