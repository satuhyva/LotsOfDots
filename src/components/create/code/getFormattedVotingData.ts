import { VoteSubmissionData } from './service'
import { StepsWithValuesType } from '../../../types/create-voting/StepsWithValuesType'

export const getFormattedVotingData = (stepsWithValues: StepsWithValuesType): VoteSubmissionData => {
    let votingData = {}
    if (stepsWithValues.every(item => item !== undefined)) {
        votingData = {
            question: stepsWithValues[0].value,
            options: stepsWithValues[1].value,
            allowedCount: stepsWithValues[2].value,
            showNames: stepsWithValues[3].value
        }
    }
    return votingData as VoteSubmissionData
}