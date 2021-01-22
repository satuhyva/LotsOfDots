import React, { useContext } from 'react'
import AppContext from '../state/context'

import { actionTypes } from '../state/actions'
import { modeOfUse } from '../state/modeOfUse'


const Testing: React.FC = () => {

    const { state, dispatch } = useContext(AppContext)
    console.log(state)

    return (
        <div>
            <button onClick={() => dispatch({ type: actionTypes.SET_MODE_OF_USE, data: modeOfUse.CREATE })}>MODE</button>
            <button onClick={() => dispatch({ type: actionTypes.SET_VOTING_NUMBER, data: '123456' })}>NUMBER</button>
        </div>


    )
}

export default Testing

