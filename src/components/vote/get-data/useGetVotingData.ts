import { useContext, useState, useEffect } from 'react'
import { actionTypes } from '../../../state/actions'
import { getVotingData } from './service'
import AppContext from '../../../state/AppContext'


type UseGetVotingData = {
    errorInGettingData: boolean
}

export const useGetVotingData = (): UseGetVotingData => {

    const [errorInGettingData, setErrorInGettingData] = useState(false)
    const { state, dispatch } = useContext(AppContext)

    useEffect(() => {
        async function getData() {
            if (state.votingNumber !== undefined) {
                const voting = await getVotingData(state.votingNumber)
                if (voting !== undefined) {
                    dispatch({ type: actionTypes.SET_VOTING_DATA, data: voting })
                } else {
                    setErrorInGettingData(true)
                }
            }

        }
        getData()
    }, [])



    return {
        errorInGettingData
    }

}