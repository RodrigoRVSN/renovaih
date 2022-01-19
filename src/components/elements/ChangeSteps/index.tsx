import { Dispatch, SetStateAction } from 'react'

interface IChangeStepsProps {
  actualStep: number
  setActualStep: Dispatch<SetStateAction<number>>
  projects_length: number
}

export function ChangeSteps({
  actualStep,
  setActualStep,
  projects_length
}: IChangeStepsProps): JSX.Element {
  function handleNextStep(): void {
    setActualStep((prevState) => prevState + 1)
  }

  function handlePreviousStep(): void {
    setActualStep((prevState) => prevState - 1)
  }

  return (
    <aside className='absolute flex items-center justify-between w-full'>
      <button
        className='change-step-button'
        disabled={actualStep - 1 < 0}
        onClick={handlePreviousStep}
        type='button'
      >
        👈
      </button>
      <button
        className='change-step-button'
        disabled={actualStep + 1 >= projects_length}
        onClick={handleNextStep}
        type='button'
      >
        👉
      </button>
    </aside>
  )
}
