import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Footer } from '@App/components/layout/Footer';
import { Header } from '@App/components/layout/Header';

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout): JSX.Element {
  const variants = {
    pageInitial: {
      opacity: 0,
      y: '-100%',
    },
    pageAnimate: {
      opacity: 1,
      y: '0',
    },
  };

  return (
    <>
      <Header />
      <motion.main
        initial="pageInitial"
        animate="pageAnimate"
        variants={variants}
        className="max-w-7xl mx-auto px-xxs md:px-xs lg:px-md min-h-screen"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
