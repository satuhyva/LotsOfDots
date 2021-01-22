import React from 'react'
import { useGetCodeStyles } from './getCodeStyles'
import Typography from '@material-ui/core/Typography'
import { StepsWithValues } from '../../../types/StepsWithValues'
import PreviewVoting from './PreviewVoting'
import MissingParameters from './MissingParameters'
import Buttons from './Buttons'
import { getFormattedVotingData } from './getFormattedVotingData'
import submitVotingService from '../services/submitVotingService'
import { getStepsWithMissingValues } from './getStepsWithMissingValues'
import { useState } from 'react'



type GetCodeProps = {
    setActiveStep: (newStep: number) => void,
    stepsWithValues: StepsWithValues,
    setCode: (newCode: string) => void,
}



const GetCode: React.FC<GetCodeProps> = ({ setActiveStep, stepsWithValues, setCode }) => {

    const classes = useGetCodeStyles()
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

    const stepsWithMissingValues = getStepsWithMissingValues(stepsWithValues)

    const submitVotingData = async () => {
        console.log('submitVotingData')
        const votingData = getFormattedVotingData(stepsWithValues)
        const submissionResponse = await submitVotingService.submitVotingData(votingData)
        console.log(submissionResponse)
        if (submissionResponse.success && submissionResponse.code) {
            setCode(submissionResponse.code)
        } else {
            if (!submissionResponse.success && submissionResponse.error) {
                setErrorMessage(submissionResponse.error)
            }
        }
    }
    console.log(errorMessage)

    return(
        <div className={classes.outerContainer}>
            <div className={classes.container} data-testid='GetCode'>
                <Typography variant='h6' className={classes.text}>
                    GET VOTING CODE
                </Typography>
                {stepsWithMissingValues.length > 0 ?
                    <MissingParameters stepsWithMissingValues={stepsWithMissingValues}/>
                    :
                    <PreviewVoting stepsWithValues={stepsWithValues}/>
                }
                {errorMessage !== undefined &&
                <>
                    <Typography variant='h6' className={classes.errorMessage}>
                        {errorMessage}
                    </Typography>
                </>

                }
                <Buttons
                    setActiveStep={setActiveStep}
                    submitData={submitVotingData}
                    valuesAreMissing={stepsWithMissingValues.length > 0}
                />
            </div>
        </div>

      
    )
}

export default GetCode