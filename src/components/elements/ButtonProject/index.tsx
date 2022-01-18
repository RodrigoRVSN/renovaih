import { useRouter } from 'next/router'

import Image from 'next/image'
import { IProjects } from '@App/core/types/IProjects'

interface IButtonProjectProps {
  available: boolean
  project: IProjects
}

export function ButtonProject({
  available,
  project
}: IButtonProjectProps): JSX.Element {
  const router = useRouter()

  function handleStartProject(): void {
    router.push({
      pathname: `/projects/${project.project_slug}`,
      query: { project_title: project.title }
    })
  }

  return available ? (
    <button
      type='button'
      className='bg-button h-lg ml-xxs lg:ml-xxlg rounded-lg text-text_contrast transite hover:opacity-70 w-project_image'
      onClick={handleStartProject}
    >
      COMEÇAR
    </button>
  ) : (
    <Image
      layout='fixed'
      width={20}
      height={20}
      src='/icons/lock.svg'
      className='mr-xxlg'
    />
  )
}
