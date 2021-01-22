import { makeStyles, createStyles } from '@material-ui/core/styles'



export const useHomeStyles = makeStyles(() => 
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
)