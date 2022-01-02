interface IButtonPoints {
  points: number
}

export function ButtonPoints({ points }: IButtonPoints): JSX.Element {
  return (
    <button
      className='bg-background rounded-full p-xs cursor-auto transite hover:bg-opacity-80 '
      type='button'
    >
      <b className='text-primary'>R </b>
      <b>{points}</b>
    </button>
  )
}
