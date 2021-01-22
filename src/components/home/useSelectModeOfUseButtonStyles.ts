import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useSelectModeOfUseButtonStyles = makeStyles((theme: Theme) => 
    createStyles({
        button: {
            backgroundColor: theme.palette.primary.main,
            marginTop: 20,
            width: '80%'
        },
        buttonContentsContainer: {
            // backgroundColor: 'orange',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modeTitle: {
            color: theme.palette.primary.contrastText,
        },
        modeDescription: {
            textTransform: 'none',
            paddingBottom: 10,
            color: theme.palette.primary.contrastText
        }
    })
)