import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import theme from '../../../utils/theme'
import AppContext from '../../../state/AppContext'
import { initialState } from '../../../types/State'



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestContext : React.FC<any> = ({ children, dispatchMock }) => {


    const state = initialState
    const dispatch = dispatchMock

    return (
        <MuiThemeProvider theme={theme}>
            <AppContext.Provider value={{ state, dispatch }}>
                {children}
            </AppContext.Provider>
        </MuiThemeProvider>
    )
}

export default TestContext

