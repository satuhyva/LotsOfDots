import { VoteSubmissionData } from '../services/submitVotingService'
import { StepsWithValues } from '../../../types/StepsWithValues'

export const getFormattedVotingData = (stepsWithValues: StepsWithValues): VoteSubmissionData => {
    let votingData = {}
    if (stepsWithValues[0] !== undefined) votingData = {...votingData, question: stepsWithValues[0].value }
    if (stepsWithValues[1] !== undefined) votingData = {...votingData, options: stepsWithValues[1].value }
    if (stepsWithValues[2] !== undefined) votingData = {...votingData, allowedCount: stepsWithValues[2].value }
    if (stepsWithValues[3] !== undefined) votingData = {...votingData, showNames: stepsWithValues[3].value }
    return votingData as VoteSubmissionData
}