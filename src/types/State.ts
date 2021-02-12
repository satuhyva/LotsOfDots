import { Voting } from './Voting'
import { modeOfUse } from './ModeOfUse'


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