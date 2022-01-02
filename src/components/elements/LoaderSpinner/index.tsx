interface ILoaderSpinner {
  loading: boolean
}

export function LoaderSpinner({ loading }: ILoaderSpinner): JSX.Element {
  return loading ? (
    <div className='flex items-center justify-center '>
      <div className='w-xlg h-xlg border-t-4 border-b-8 border-card rounded-full animate-spin' />
    </div>
  ) : (
    <div />
  )
}
