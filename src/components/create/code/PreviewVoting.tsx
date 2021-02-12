import React from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'
import { StepsWithValues } from '../../../types/StepsWithValues'



type PreviewVotingProps = {
    stepsWithValues: StepsWithValues,
}

const PreviewVoting: React.FC<PreviewVotingProps> = ({ stepsWithValues }) => {

    const classes = useStyles()

    return(
        <div className={classes.previewContainer}>
            <Typography className={classes.text}>
                <strong>SUMMARY OF THE VOTING:</strong>
            </Typography>
            <div data-testid='PreviewVoting' className={classes.outerContainer}>
                <Typography className={classes.questionText}>
                    {stepsWithValues[0].value}
                </Typography>
                <ul>
                    {stepsWithValues[1].value?.map(option => <li key={option} className={classes.optionText}>{option}</li>)}
                </ul>
                <Typography className={classes.infoText}>
                    {stepsWithValues[2].value} votes / voter
                </Typography>
                <Typography className={classes.infoText}>
                    {stepsWithValues[3].value ?
                        'Show voter names to all' : 'Anonymous voting'
                    }
                </Typography>
            </div>
        </div>

      
    )
}

export default PreviewVoting