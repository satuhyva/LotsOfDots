import axios from 'axios'
import { OptionVote } from '../../../types/OptionVote'
import { OptionVoteInServerResponseType } from '../../../types/server-response/OptionVoteInServerResponseType'
import { VotingInServerResponseType } from '../../../types/server-response/VotingInServerResponseType'
import { Voting } from '../../../types/Voting'

let baseUrl = 'http://localhost:3001'
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://lotsofdotsserver.herokuapp.com'
}



export const getVotingData = async (votingNumber: string): Promise<Voting | undefined> => {
    try {
        const response = await axios.get(`${baseUrl}/votings/${votingNumber}`)
        return formatVoting(response.data)
    } catch (error) {
        return undefined
    }
}


const formatVoting = (responseData: unknown): Voting => {
    const voting = responseData as VotingInServerResponseType
    return {
        question: parseQuestion(voting.question),
        votingNumber: parseVotingNumber(voting.voting_number),
        showNames: parseShowNames(voting.show_names),
        allowedCount: parseAllowedCount(voting.allowed_count),
        created: parseCreated(voting.created),
        optionVotes: parseOptionVotes(voting.option_votes)
    }

}

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String
}
const isBoolean = (value: unknown): value is boolean => {
    return typeof value === 'boolean' || value instanceof Boolean
}
const isNumber = (number: unknown): number is number => {
    return typeof number === 'number' || number instanceof Number
}
const parseQuestion = (question: unknown): string => {
    if (!question || !isString(question)) throw new Error('Question is required and must be string!')
    return question
}
const parseVotingNumber = (votingNumber: unknown): string => {
    if (!votingNumber || !isString(votingNumber)) throw new Error('Voting number is required and must be string!')
    return votingNumber
}
const parseShowNames = (showNames: unknown): boolean => {
    if (showNames === undefined || showNames === null || !isBoolean(showNames)) throw new Error('Show names is required and must be a boolean value!')
    return showNames
}
const parseAllowedCount = (allowedCount: unknown): number => {
    if (!allowedCount || !isNumber(allowedCount)) throw new Error('Allowed count is required and must be a number!')
    return allowedCount
}
const parseCreated = (created: unknown): string => {
    if (!created || !isString(created)) throw new Error('Date is required and must be string!')
    return created
}
const parseOptionVotes = (optionVotes: unknown): OptionVote[] => {
    if (!optionVotes || !Array.isArray(optionVotes)) throw new Error('Options are required and must be an array of option data!')
    return optionVotes.map(optionVote => parseOneOptionVote(optionVote))
}

const parseOneOptionVote = (optionVote: unknown): OptionVote => {
    const optionData = optionVote as OptionVoteInServerResponseType
    return {
        id: parseId(optionData.id),
        optionText: parseOptionText(optionData.option_text),
        optionVoters: parseOptionVoters(optionData.option_voters)
    }
}
const parseId = (id: unknown): number => {
    if (!id || !isNumber(id)) throw new Error('Option Id is required and must be a number!')
    return id
}
const parseOptionText = (text: unknown): string => {
    if (!text || !isString(text)) throw new Error('Option text is required and must be string!')
    return text
}
const parseOptionVoters = (voters: unknown): string[] | null[] => {
    if (!voters || !Array) throw new Error('Option voters are required and must be an array of string or null!')
    if ((voters as Array<string | null>).length === 1 && (voters as Array<string | null>)[0] === null) return []
    return parseVoters(voters)
}
const votersAllNull = (voters: unknown): boolean => {
    const votersNull = voters as null[]
    return votersNull.every(voter => voter === null)
}
const votersAllNames = (voters: unknown): boolean => {
    const votersNull = voters as string[]
    return votersNull.every(voter => isString(voter))
}
const parseVoters = (voters: unknown): string[] | null[] => {
    if (!votersAllNull(voters) && !votersAllNames(voters)) throw new Error('Option voters are required and must be an array of string or null!')
    if (votersAllNull(voters)) return voters as null[]
    return voters as string[]
}






