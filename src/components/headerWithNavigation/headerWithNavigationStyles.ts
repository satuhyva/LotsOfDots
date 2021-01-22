import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'



export const useHeaderWithNavigationStyles = makeStyles((theme: Theme) => 
    createStyles({
        outerContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 10,
            backgroundColor: theme.palette.secondary.light
        },
        outerContainerNoMode: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: theme.palette.secondary.light
        },
        innerContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 10,
        },
        divider: {
            backgroundColor: theme.palette.primary.main,
            width: '100%'
        },
    })
)
