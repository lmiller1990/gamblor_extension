import { ISplit } from './split'

export interface ILeague {
  id: number
  name: string
  splits: ISplit[]
}
