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
        },
        rowContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 20
        },
        optionText: {
            marginRight: 40,
        },
        voterName: {
            marginTop: -5,
        },
        text: {
            textAlign: 'center',
            marginTop: 20,
            color: theme.palette.primary.dark,
        },
        optionContainer: {
            backgroundColor: theme.palette.secondary.main,
            marginTop: 5,
            borderRadius: 6,
            paddingLeft: 10
        },
        votesNumberText: {
            marginTop: -5,
        }

    })
)