import axios from 'axios'

let baseUrl = 'http://localhost:3001'
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://lotsofdotsserver.herokuapp.com'
}


export type SelectedVotingOptionsData = {
    name: string | undefined,
    answers: number[]
}



export const submitSelectedVotingOptions = async (selectedVotingOptionsData: SelectedVotingOptionsData): Promise<boolean> => {
    try {
        await axios.post<string>(`${baseUrl}/answers`, selectedVotingOptionsData)
        return true
    } catch (error) {
        return false
    }
}

