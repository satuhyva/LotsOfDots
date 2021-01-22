import { OptionVote } from './OptionVote'

export type Voting = {
    question: string,
    votingNumber: string,
    showNames: boolean,
    allowedCount: number,
    created: string,
    optionVotes: OptionVote[]
}
