import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useCreateVotingStyles = makeStyles((theme: Theme) => 
    createStyles({
        pageTitleContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: -5,
        },
        text: {
            color: theme.palette.primary.main,
        },
    })
)