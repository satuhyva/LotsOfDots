import axios from 'axios'

const baseUrl = 'https://lotsofdotsbackend.herokuapp.com/votings'    //'/votings'

export type VoteSubmissionData = {
    question: string,
    showNames: boolean,
    allowedCount: number,
    options: string[]
}
export type VoteSubmissionResult = {
    success: boolean,
    code?: string,
    error?: string
}


const submitVotingData = async (votingData: VoteSubmissionData): Promise<VoteSubmissionResult> => {
    try {
        const requestBody = votingData
        const response = await axios.post<string>(baseUrl, requestBody)
        return { success: true, code: response.data }
    } catch (error) {
        console.log(error)
        console.log(error.toString())
        return { success: false, error: 'SUBMISSION FAILED!!!' }
    }
}

export default { submitVotingData }