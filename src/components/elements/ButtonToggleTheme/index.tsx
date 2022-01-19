import { useTheme } from 'next-themes'

export function ButtonToggleTheme(): JSX.Element {
  const { theme, setTheme } = useTheme()
  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='bg-dark_contrast p-md rounded-full h-lg flex items-center text-text_contrast'
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {theme === 'dark' ? 'Escuro 🌞' : 'Claro 🌑'}
    </button>
  )
}
