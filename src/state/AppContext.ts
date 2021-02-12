import React from 'react'
import { createContext } from 'react'
import { initialState } from '../types/State'
import { State } from '../types/State'
import { Action } from './actions'


type ContextType = {
    state: State,
    dispatch: React.Dispatch<Action>
}


const AppContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})


export default AppContext

