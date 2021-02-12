import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: -5,
            width: '85%',
        },
        displayContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            width: '85%',
            borderRadius: 6,
            backgroundColor: theme.palette.secondary.light,
            padding: 10,
        },
        text: {
            color: theme.palette.primary.main,
            textAlign: 'center',
            marginBottom: 10
        },
        outerContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
)