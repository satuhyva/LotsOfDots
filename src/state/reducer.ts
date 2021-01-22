import { Action, actionTypes } from './actions'
import { State } from './state'
import { modeOfUse } from './modeOfUse'


export const reducer = (state: State, action: Action): State => {

    switch (action.type) {
    case actionTypes.SET_MODE_OF_USE:
        return { 
            modeOfUse: action.data, 
            votingNumber: action.data === modeOfUse.CREATE ? undefined : state.votingNumber,
            votingData:  action.data === modeOfUse.CREATE ? undefined : state.votingData
        }
    case actionTypes.SET_VOTING_NUMBER:
        return {
            ...state,
            votingNumber: action.data,
            votingData: undefined
        }
    case actionTypes.SET_VOTING_DATA:
        return {
            ...state,
            votingData: action.data
        }
    default:
        return state
    }
}