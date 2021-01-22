import React from 'react'
import { useSuccessStyles } from './successStyles'
// import Typography from '@material-ui/core/Typography'
import { StepsWithValues } from '../../../types/StepsWithValues'
// import PreviewVoting from './PreviewVoting'
// import MissingParameters from './MissingParameters'
// import Buttons from './Buttons'
// import { getFormattedVotingData } from './getFormattedVotingData'
// import submitVotingService from '../services/submitVotingService'
// import { getStepsWithMissingValues } from './getStepsWithMissingValues'



type SuccessProps = {
    stepsWithValues: StepsWithValues,
    code: string | undefined,
}

const Success: React.FC<SuccessProps> = ({ stepsWithValues, code }) => {
    console.log(stepsWithValues, code)
    const classes = useSuccessStyles()
    // const [errorMessage, setErrorMessage] = useState(undefined)

    // const stepsWithMissingValues = getStepsWithMissingValues(stepsWithValues)

    // const submitVotingData = async () => {
    //     console.log('submitVotingData')
    //     const votingData = getFormattedVotingData(stepsWithValues)
    //     const submissionResponse = await submitVotingService.submitVotingData(votingData)
    //     console.log(submissionResponse)
    // }


    return(
        <div className={classes.outerContainer}>
            {/* <div className={classes.container} data-testid='GetCode'>
                <Typography variant='h6' className={classes.text}>
                    GET VOTING CODE
                </Typography>
                {stepsWithMissingValues.length > 0 ?
                    <MissingParameters stepsWithMissingValues={stepsWithMissingValues}/>
                    :
                    <PreviewVoting stepsWithValues={stepsWithValues}/>
                }
                <Buttons
                    setActiveStep={setActiveStep}
                    submitData={submitVotingData}
                    valuesAreMissing={stepsWithMissingValues.length > 0}
                />
            </div> */}
        </div>

      
    )
}

export default Success