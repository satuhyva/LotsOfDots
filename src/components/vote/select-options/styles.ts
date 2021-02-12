import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        questionText: {
            textAlign: 'center',
            marginTop: 20
        },
        submitButtonContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
        },
        submitButton: {
            backgroundColor: theme.palette.primary.dark
        },
        submitButtonText: {
            color: theme.palette.primary.contrastText
        },
        linkText: {
            color: theme.palette.primary.main,
        }

    })
)