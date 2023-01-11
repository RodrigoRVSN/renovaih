import { IProjects, IProjectStepsPageProps } from '@App/core/types/IProjects';

const projectsMock: IProjects[] = [
  {
    id: '1',
    title: 'Energia solar',
    summary:
      'Explore a física com este projeto sobre a termodinâmica, que nada mais é do que o estudo da física sobre temperaturas. Venha conosco nessa aventura, é muito fácil e divertido. Vem comigo?',
    level: '1',
    image: '/renovaih-academ-rodrigorvsn.vercel.app/zoro.png',
    project_slug: '1',
  },
  {
    id: '2',
    title: 'Protetor solar',
    summary:
      'Explore a física com este projeto sobre a termodinâmica, que nada mais é do que o estudo da física sobre temperaturas. Venha conosco nessa aventura, é muito fácil e divertido. Vem comigo?',
    level: '2',
    image: '/renovaih-academ-rodrigorvsn.vercel.app/zoro.png',
    project_slug: '2',
  },
];

const projectStepsContentMock: IProjectStepsPageProps = {
  project: 'protetor solar caseiro',
  content: [
    {
      id: '1',
      step: '<h1>fala galerinha</h1>',
    },
    {
      id: '2',
      step: '<h1>Passo 2</h1>',
    },
  ],
};

export { projectsMock, projectStepsContentMock };
