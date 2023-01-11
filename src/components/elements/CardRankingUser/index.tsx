import { motion } from 'framer-motion';
import { IUserInfo } from '@App/core/types/next-auth';
import { ButtonPoints } from '../ButtonPoints';

interface ICardRankingUser {
  index: number;
  user: IUserInfo;
}

export function CardRankingUser({
  index,
  user,
}: ICardRankingUser): JSX.Element {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.article
      className="bg-ranking flex-col-row gap-md justify-between mx-xxs sm:mx-lg p-md rounded-md transite hover:scale-105 text-text"
      animate="visible"
      initial="hidden"
      variants={variants}
      whileHover={{ backgroundColor: '#0075FF' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="flex gap-md items-center">
        <span>
          <b>{index}.</b>
        </span>
        <img
          className="rounded-full"
          src={String(user.image)}
          width={32}
          height={32}
          alt={`Foto de ${user.name}`}
        />
        <h2>{user.name}</h2>
      </div>
      <ButtonPoints points={user.points * 1000} />
    </motion.article>
  );
}
