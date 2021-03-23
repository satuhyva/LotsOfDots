import { Voting } from './Voting'
import { ModeOfUseEnum } from './mode-of-use/ModeOfUseEnum'


export type State = {
    modeOfUse: ModeOfUseEnum | undefined,
    votingNumber: string | undefined,
    votingData: Voting | undefined
}

export const initialState: State = {
    modeOfUse: undefined,
    votingNumber: undefined,
    votingData: undefined
}