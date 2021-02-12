import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        stepLabelTextActive: {
            color: theme.palette.primary.dark,
            fontSize: 14,
            marginTop: -14
        },
        stepLabelTextNotActive: {
            color: theme.palette.primary.light,
            fontSize: 14,
            marginTop: -14
        },
        iconActive: {
            color: theme.palette.primary.dark,
        },
        iconNotActive: {
            color: theme.palette.primary.light,
        },
    })
)