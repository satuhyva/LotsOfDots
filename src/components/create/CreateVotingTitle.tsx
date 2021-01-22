import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useCreateVotingStyles } from './createVotingStyles'


const CreateVotingTitle: React.FC = () => {

    const classes = useCreateVotingStyles()

    return(
        <div className={classes.pageTitleContainer}>
            <Typography variant='h5' className={classes.text}>
                  CREATE NEW VOTING
            </Typography>
            <Typography className={classes.text}>
                  Complete all steps to create a new voting event.
            </Typography>
        </div>
    )
}

export default CreateVotingTitle
