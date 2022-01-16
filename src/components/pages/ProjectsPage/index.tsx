import { ButtonProject } from '@App/components/elements/ButtonProject'
import { IProjects } from '@App/core/types/IProjects'
import Image from 'next/image'

interface IProjectsPageProps {
  projects: IProjects[]
}

export default function ProjectsPage({
  projects
}: IProjectsPageProps): JSX.Element {
  return (
    <section className='my-xxlg grid-projects'>
      {projects.map((project) => (
        <article
          className={`items-center flex flex-col lg:flex-row ${
            project.available ? 'bg-card' : 'bg-blocked'
          } lg:h-card_w mx-xxs p-xmd rounded-2xl  lg:w-project_w`}
        >
          <Image
            width={170}
            height={150}
            layout='fixed'
            className='w-project_image h-project_image'
            src={project.type === 'solar' ? '/images/sun.svg' : ''}
          />
          <div className='flex flex-col lg:w-card_w text-text_contrast'>
            <h2 className='text-3xl'>{project.title}</h2>
            <br />
            <p>{project.summary}</p>
            <div className='flex items-center justify-between mt-xlg'>
              <span>
                <b>Nível {project.level}</b>
              </span>
              <ButtonProject available={project.available} />
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
