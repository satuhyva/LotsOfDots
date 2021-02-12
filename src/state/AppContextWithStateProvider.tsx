import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { initialState } from '../types/State'
import AppContext from './AppContext'


const AppContextWithStateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextWithStateProvider



