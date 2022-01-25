export interface IProjects {
  id: string
  title: string
  summary: string
  level: string
  image: string
  project_slug: string
}

export interface IFetchProjects {
  data: IProjects[]
}

export interface IPrismicProject {
  uid: string
  data: {
    steps: {
      step: string
    }[]
  }
}

interface IContext {
  id: string
  step: string
}

export interface IProjectStepsPageProps {
  project?: string
  content: IContext[]
}
