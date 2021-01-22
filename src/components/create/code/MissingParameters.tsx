import React from 'react'
import { useGetCodeStyles } from './getCodeStyles'
import Typography from '@material-ui/core/Typography'
import { Step } from '../../../types/StepsWithValues'



type MissingParametersProps = {
    stepsWithMissingValues: Step[],
}

const MissingParameters: React.FC<MissingParametersProps> = ({ stepsWithMissingValues }) => {

    const classes = useGetCodeStyles()

    return (
        <div className={classes.outerContainer}>
            <Typography className={classes.text}>
                    All parameter values need to be set before your new voting event can be created.
            </Typography>   
            <Typography className={classes.text}>
                    Please give values to the following:
            </Typography>         
            {<ul >
                {stepsWithMissingValues.map(step => <li key={step.label}>{step.label}</li>)}
            </ul>}     
        </div>
    )
}

export default MissingParameters