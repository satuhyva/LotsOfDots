import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { initialState } from './state'
import AppContext from './context'


const AppContextWithStateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextWithStateProvider



