import { IProjects } from '@App/core/types/IProjects'
import Image from 'next/image'
import { ButtonProject } from '../ButtonProject'

interface ICardProject {
  project: IProjects
}

export function CardProject({ project }: ICardProject): JSX.Element {
  return (
    <article
      key={project.id}
      className='items-center flex flex-col gap-xmd lg:flex-row bg-card lg:h-card_w mx-auto p-xmd rounded-2xl lg:w-project_w'
    >
      <Image
        width={170}
        height={150}
        layout='fixed'
        className='w-project_image h-project_image'
        src={project.image}
      />
      <div className='flex flex-col lg:w-card_w text-text_contrast'>
        <h2 className='text-3xl'>{project.title}</h2>
        <br />
        <p>{project.summary}</p>
        <div className='flex items-center justify-between mt-xlg'>
          <span>
            <b>Nível {project.level}</b>
          </span>
          <ButtonProject available project={project} />
        </div>
      </div>
    </article>
  )
}
