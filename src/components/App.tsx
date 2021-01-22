import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../utils/theme'
import AppContextWithStateProvider from '../state/AppContextWithStateProvider'
import { BrowserRouter as Router} from 'react-router-dom'
import HeaderWithNavigation from './headerWithNavigation/HeaderWithNavigation'
import LotsOfDots from './LotsOfDots'
// import Testing from './components/Testing'


const App: React.FC = () => {

    return(
        <ThemeProvider theme={theme}>
            <AppContextWithStateProvider>
                <Router>
                    <HeaderWithNavigation/>
                    <LotsOfDots/>
                </Router>
            </AppContextWithStateProvider>
        </ThemeProvider>
      
    )
}

export default App


