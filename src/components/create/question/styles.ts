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
        },
        inputWidth: {
            width: '90%'
        },
        iconButton: {
            backgroundColor: theme.palette.secondary.main,
            marginTop: 10
        },
        editIconButton: {
            backgroundColor: theme.palette.secondary.main,
            margin: 10,
        },
        displayQuestion: {
            fontSize: 20,
            fontStyle: 'italic',
            color: theme.palette.primary.main,
        }
    })
)