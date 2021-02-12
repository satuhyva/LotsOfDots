import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        navigationContentsTitle: {
            color: theme.palette.primary.contrastText,
        },
        navigationContentsItem: {
            color: theme.palette.primary.contrastText,
        },
        background: {
            backgroundColor: theme.palette.primary.main,
        },
        divider: {
            backgroundColor: theme.palette.primary.contrastText,
        },
        navigationMenu: {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 8
        },
        icon: {
            fontSize: 30,
            color: theme.palette.primary.main,
        },
        paper: {
            background: theme.palette.primary.main, width: '100%'
        }
    })
)
