import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IProjects } from '@App/core/types/IProjects';

export interface IButtonProjectProps {
  done: boolean;
  project: IProjects;
  unavailable: boolean;
}

export function ButtonProject({
  done,
  project,
  unavailable,
}: IButtonProjectProps): JSX.Element {
  const router = useRouter();

  function handleStartProject(): void {
    router.push({
      pathname: `/projects/${project.project_slug}`,
      query: { project_title: project.title },
    });
  }

  return unavailable || done ? (
    <motion.div whileHover={{ scale: 2 }}>
      <Image
        alt="Atividade bloqueada"
        data-testid="blocked"
        layout="fixed"
        width={20}
        height={20}
        src="/icons/lock.svg"
        className="mr-xxlg"
      />
    </motion.div>
  ) : (
    <button
      type="button"
      className="bg-button h-lg ml-xxs lg:ml-xxlg rounded-lg text-text_contrast transite hover:opacity-90 w-project_image"
      onClick={handleStartProject}
    >
      COMEÇAR
    </button>
  );
}
