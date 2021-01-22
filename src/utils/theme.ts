import { createMuiTheme } from '@material-ui/core/styles'

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FF9100&secondary.color=F5F5F5

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#616161',
            light: '#8e8e8e',
            dark: '#373737',
            contrastText: '#fafafa'
        },
        secondary: {
            main: '#bdbdbd',
            light: '#efefef',
            dark: '#8d8d8d',
            contrastText: '#212121'
        },
        error: {
            main: '#a30000'
        }, 
        success: {
            main: '#4faf11'
        }, 
        warning: {
            main: '#ff9100'
        }, 
    }
})

export default theme
