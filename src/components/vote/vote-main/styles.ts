import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        text: {
            textAlign: 'center',
            marginTop: 20,
            color: theme.palette.primary.dark,
        },


    })
)