import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        optionText: {
            textAlign: 'center',
            marginTop: 20
        },
        buttonsContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
  
        },
        unvoteButton: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            marginLeft: 3,
            height: 25
        },
        voteButton: {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.secondary.contrastText,
            marginLeft: 3,
            height: 25
        }
    })
)