import React from 'react'
import { createContext } from 'react'
import { initialState } from './state'
import { State } from './state'
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

