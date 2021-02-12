import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from './styles'


type ErrorDisplayProps = {
    votingNumber: string
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ votingNumber }) => {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography variant='h6' className={classes.text}>
                Voting number
            </Typography>
            <Typography variant='h4' className={classes.text}>
                <strong>{votingNumber}</strong>
            </Typography>
            <Typography variant='h6' className={classes.text}>
                Could not find that voting!
            </Typography>
        </div>
    )
}

export default ErrorDisplay


