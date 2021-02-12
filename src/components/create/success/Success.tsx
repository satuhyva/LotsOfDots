import React from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'



type SuccessProps = {
    code: string | undefined,
}

const Success: React.FC<SuccessProps> = ({ code }) => {
    const classes = useStyles()



    return(
        <div className={classes.outerContainer}>
            <Typography variant='h6' className={classes.title}>Successfully created voting event.</Typography>
            <Typography variant='h6' className={classes.text}>
                    VOTING CODE:
            </Typography>
            <Typography variant='h4' className={classes.text}>
                <strong>{code}</strong>
            </Typography>
            <Typography className={classes.info}>
                Give this code to participants and start voting!
            </Typography>
            <Typography className={classes.linkText}>
                <Link to='/vote' className={classes.link}>
                    Vote in this voting event 
                </Link>
            </Typography>
            <Typography className={classes.linkText}>
                <Link to='/view' className={classes.link}>
                    View this voting 
                </Link>
            </Typography>
        </div>

      
    )
}

export default Success