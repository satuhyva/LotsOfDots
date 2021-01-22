import React from 'react'
import { useHeaderStyles } from './headerStyles'
import Typography from '@material-ui/core/Typography'


const Header: React.FC = () => {

    const classes = useHeaderStyles()

    return(
        <div className={classes.container}>
            <Typography variant='h5' className={classes.titleText}>
                LOTS OF DOTS
            </Typography>
            <Typography className={classes.descriptionText}>
                For quick and simple dot voting.
            </Typography>
            {/* <Typography className={classes.descriptionText}>
                No need for email or phone number data.
            </Typography> */}
        </div>
      
    )
}

export default Header