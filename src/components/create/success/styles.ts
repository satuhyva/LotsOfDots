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
        text: {
            color: theme.palette.primary.main,
            textAlign: 'center',
        },
        outerContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            color: theme.palette.success.main,
            textAlign: 'center',
            marginTop: 40,
            marginBottom: 10,
        },
        info: {
            color: theme.palette.primary.main,
            fontSize: 16,
            marginTop: 30,
            marginBottom: 20
        },    
        linkText: {
            marginTop: 10
        },
        link: {
            color: theme.palette.primary.main,
        },
    })
)