import { OptionVote } from '../../types/OptionVote'


export const getSortedVotings = (optionVotes: OptionVote[]): OptionVote[] => {
    return optionVotes.sort(function(option1, option2) {
        if (option1.optionVoters.length < option2.optionVoters.length) return 1
        if (option1.optionVoters.length > option2.optionVoters.length) return -1
        return 0
    })
}

