import React from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'


const Header: React.FC = () => {

    const classes = useStyles()

    return(
        <div className={classes.container}>
            <Typography variant='h5' className={classes.titleText}>
                LOTS OF DOTS
            </Typography>
            <Typography className={classes.descriptionText}>
                For quick and simple dot voting.
            </Typography>
        </div>
      
    )
}

export default Header