import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        buttonsContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
        },
        buttonText: {
            color: theme.palette.primary.dark,
        },
        iconButton: {
            backgroundColor: theme.palette.secondary.main,
            margin: 5,
        }

    })
)