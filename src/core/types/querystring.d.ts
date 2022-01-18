import { IProjects } from './IProjects'

/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'querystring' {
  interface ParsedUrlQueryInput
    extends NodeJS.Dict<
      | string
      | number
      | boolean
      | ReadonlyArray<string>
      | ReadonlyArray<number>
      | ReadonlyArray<boolean>
      | null
      | IProjects
    > {}
}
