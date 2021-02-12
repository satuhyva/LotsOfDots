import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        container: {
            marginTop: 40,
        },
        text: {
            color: theme.palette.error.main,
            textAlign: 'center',
            marginTop: 10
        },
    })
)