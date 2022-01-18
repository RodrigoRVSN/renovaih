import { useState } from 'react'
import { ChangeSteps } from '@App/components/elements/ChangeSteps'
import { IProjectStepsPageProps } from '@App/core/types/IProjects'
import { ButtonFinishProject } from '@App/components/elements/ButtonFinishProject'

export default function ProjectStepsPage({
  project,
  content
}: IProjectStepsPageProps): JSX.Element {
  const [actualStep, setActualStep] = useState(0)

  return (
    <>
      <header className='bg-secondary flex items-center justify-center h-xxxlg w-full  relative rounded-b-2xl'>
        <h1 className='font-bold my-xxlg text-2xl sm:text-3xl md:text-4xl text-transparent bg-gradient-to-r bg-clip-text from-button to-start_button p-lg'>
          {project}
        </h1>
        <ChangeSteps
          actualStep={actualStep}
          setActualStep={setActualStep}
          projects_length={content.length}
        />
      </header>

      <section className='flex flex-col items-center justify-center mt-project_image'>
        <div
          dangerouslySetInnerHTML={{ __html: content[actualStep].step }}
          className='flex flex-col gap-lg items-center justify-center'
        />
        {actualStep === content.length - 1 && <ButtonFinishProject />}
      </section>
    </>
  )
}
