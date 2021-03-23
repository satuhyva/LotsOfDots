import { OptionVoteInServerResponseType } from './OptionVoteInServerResponseType'

export type VotingInServerResponseType = {
    question: string,
    voting_number: string,
    show_names: boolean,
    allowed_count: number,
    created: string,
    option_votes: OptionVoteInServerResponseType[]
}