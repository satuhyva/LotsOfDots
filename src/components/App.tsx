import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../utils/theme'
import AppContextWithState from '../state/AppContextWithState'
import { BrowserRouter as Router} from 'react-router-dom'
import HeaderWithNavigation from './headerWithNavigation/HeaderWithNavigation'
import LotsOfDots from './LotsOfDots'



const App: React.FC = () => {

    return(
        <ThemeProvider theme={theme}>
            <AppContextWithState>
                <Router>
                    <HeaderWithNavigation/>
                    <LotsOfDots/>
                </Router>
            </AppContextWithState>
        </ThemeProvider>
      
    )
}

export default App


