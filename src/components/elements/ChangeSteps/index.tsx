import { Dispatch, SetStateAction } from 'react';

interface IChangeStepsProps {
  actualStep: number;
  setActualStep: Dispatch<SetStateAction<number>>;
  projects_length: number;
}

export function ChangeSteps({
  actualStep,
  setActualStep,
  projects_length,
}: IChangeStepsProps) {
  function handleNextStep() {
    setActualStep((prevState) => prevState + 1);
  }

  function handlePreviousStep() {
    setActualStep((prevState) => prevState - 1);
  }

  return (
    <aside className="absolute flex items-center justify-between w-full">
      <button
        data-testid="step__previous"
        className="change-step-button"
        disabled={actualStep - 1 < 0}
        onClick={handlePreviousStep}
        type="button"
      >
        👈
      </button>

      <button
        data-testid="step__next"
        className="change-step-button"
        disabled={actualStep + 1 >= projects_length}
        onClick={handleNextStep}
        type="button"
      >
        👉
      </button>
    </aside>
  );
}
