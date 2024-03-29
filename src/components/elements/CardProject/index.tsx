import { motion } from 'framer-motion';
import Image from 'next/image';
import { IProjects } from '@App/core/types/IProjects';
import { ButtonProject } from '../ButtonProject';

interface ICardProject {
  project: IProjects;
  points: string;
  project_index: string;
}

export function CardProject({
  project,
  project_index,
  points,
}: ICardProject): JSX.Element {
  const unavailableProject = project_index > points;
  const hasDoneProject = project_index < points;

  return (
    <motion.article
      initial={{ opacity: 0, y: '-20vh' }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`items-center flex flex-col gap-xmd lg:flex-row ${
        unavailableProject ? 'bg-blocked' : 'bg-start_button'
      } mx-auto p-xmd rounded-2xl lg:w-project_w`}
    >
      <Image
        alt={`Projeto ${project.title}`}
        width={170}
        height={150}
        layout="fixed"
        className="w-project_image h-project_image"
        src={project.image}
      />
      <div className="flex flex-col lg:w-card_w text-text_contrast">
        <h2 className="text-3xl">{project.title}</h2>
        <br />
        <p>{project.summary}</p>
        <div className="flex items-center justify-between mt-xlg">
          <span>
            <b>
              Nível
              {project.level}
            </b>
          </span>
          <ButtonProject
            unavailable={unavailableProject}
            done={hasDoneProject}
            project={project}
          />
        </div>
      </div>
    </motion.article>
  );
}
