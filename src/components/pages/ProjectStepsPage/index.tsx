import { useState } from 'react'
import { ChangeSteps } from '@App/components/elements/ChangeSteps'
import { IProjectStepsPageProps } from '@App/core/types/IProjects'
import { ButtonFinishProject } from '@App/components/elements/ButtonFinishProject'
import styles from './styles.module.css'

export default function ProjectStepsPage({
  project,
  content
}: IProjectStepsPageProps): JSX.Element {
  const [actualStep, setActualStep] = useState(0)

  return (
    <>
      <header className={styles.header__container}>
        <h1 className={styles.header__container__title}>{project}</h1>

        <ChangeSteps
          actualStep={actualStep}
          setActualStep={setActualStep}
          projects_length={content.length}
        />
      </header>

      <section className='flex flex-col items-center justify-center mt-xxxlg'>
        <div
          dangerouslySetInnerHTML={{ __html: content[actualStep].step }}
          className={styles.step__container}
        />
        {actualStep === content.length - 1 && <ButtonFinishProject />}
      </section>
    </>
  )
}
