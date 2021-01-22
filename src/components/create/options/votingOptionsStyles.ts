import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useVotingOptionsStyles = makeStyles((theme: Theme) => 
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
        listText: {
            color: theme.palette.primary.main,
            fontSize: 18,
            fontStyle: 'italic',
        },
        listIcon: {
            color: theme.palette.primary.main,
        },
        listIconButton:{
            backgroundColor: theme.palette.secondary.light,
            marginLeft: 10,
            marginTop: -5,
            marginBottom: -5
        },
        addButton:{
            backgroundColor: theme.palette.secondary.light,
            marginBottom: -10,
            marginTop: 10
        },
        buttonText: {
            color: theme.palette.primary.dark,
        },

    })
)