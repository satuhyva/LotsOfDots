import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useGetCodeStyles = makeStyles((theme: Theme) => 
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
        previewContainer: {
            backgroundColor: theme.palette.secondary.light,
            marginTop: 5,
            width: '90%',
            borderRadius: 6,
            padding: 10,
        },
        questionText: {
            color: theme.palette.primary.main,
            textAlign: 'center',
            fontSize: 20,
            marginBottom: -10
        },
        optionText: {
            color: theme.palette.primary.main,
        },      
        infoText: {
            color: theme.palette.primary.main,
            fontSize: 16,
        },  
        errorMessage: {
            color: theme.palette.error.main,
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
        },   
        noteText: {
            color: theme.palette.primary.main,
            fontSize: 14,
            paddingTop: 10,
            fontStyle: 'italic',
            textAlign: 'center',
        },  
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