import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        textFieldInput: {
            width: '90%',
            marginTop: 20,
        },
        button: {
            backgroundColor: theme.palette.secondary.main,
            marginTop: 10
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: -5,
            width: '85%',
        },

    })
)