import { useTheme } from 'next-themes'

export function ButtonToggleTheme() {
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='bg-dark_contrast p-lg sm:p-md rounded-full h-lg flex items-center text-text_contrast'
      onClick={handleToggleTheme}
    >
      {theme === 'dark' ? 'Escuro 🌞' : 'Claro 🌑'}
    </button>
  )
}
