import { informationsData } from "@data/informations"
import { atomWithReducer } from 'jotai/utils'

const reducer = (_prev: string, next: string) => next
export const activeTabAtom = atomWithReducer(informationsData[0].name, reducer)
export const prevTabAtom = atomWithReducer(informationsData[0].name, reducer)
