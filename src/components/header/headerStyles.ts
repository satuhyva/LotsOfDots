import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useHeaderStyles = makeStyles((theme: Theme) => 
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 20,
            paddingBottom: 5,
        },
        titleText: {
            color: theme.palette.primary.main,
            paddingTop: 5,
        },
        descriptionText: {
            color: theme.palette.primary.main,
            fontSize: 13,
            marginBottom: -3,
        }
    })
)
