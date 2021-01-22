import { Voting } from '../types/Voting'
import { modeOfUse } from './modeOfUse'


export type State = {
    modeOfUse: modeOfUse | undefined,
    votingNumber: string | undefined,
    votingData: Voting | undefined
}

export const initialState: State = {
    modeOfUse: undefined,
    votingNumber: undefined,
    votingData: undefined
}