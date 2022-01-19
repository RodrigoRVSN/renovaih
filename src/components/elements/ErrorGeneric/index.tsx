interface IErrorGeneric {
  title: string
  refetch?: () => void
}

export function ErrorGeneric({ title, refetch }: IErrorGeneric): JSX.Element {
  return (
    <section className='flex flex-col items-center p-md'>
      {refetch && (
        <button
          className='my-lg text-3xl transite hover:opacity-40'
          onClick={refetch}
          type='button'
        >
          🔄
        </button>
      )}
      <p className='text-2xl text-center'>{title}</p>
      <img
        src='/images/error.svg'
        alt='Houve um erro'
        className='h-card_h w-card_h'
      />
    </section>
  )
}
