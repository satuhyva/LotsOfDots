import React, { useContext } from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'
import { StepsWithValuesType } from '../../../types/create-voting/StepsWithValuesType'
import PreviewVoting from './PreviewVoting'
import MissingParameters from './MissingParameters'
import Buttons from './Buttons'
import { getFormattedVotingData } from './getFormattedVotingData'
import submitVotingService from './service'
import { getStepsWithMissingValues } from './getStepsWithMissingValues'
import { useState } from 'react'
import AppContext from '../../../state/AppContext'
import { actionTypes } from '../../../state/actions'



type GetCodeProps = {
    setActiveStep: (newStep: number) => void,
    stepsWithValues: StepsWithValuesType,
    setCode: (newCode: string) => void,
    resetValues: () => void
}



const GetCode: React.FC<GetCodeProps> = ({ setActiveStep, stepsWithValues, setCode, resetValues }) => {

    const classes = useStyles()
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    const { dispatch } = useContext(AppContext)
    const stepsWithMissingValues = getStepsWithMissingValues(stepsWithValues)

    const submitVotingData = async () => {
        const votingData = getFormattedVotingData(stepsWithValues)
        const submissionResponse = await submitVotingService.submitVotingData(votingData)
        if (submissionResponse.success && submissionResponse.code) {
            setCode(submissionResponse.code)
            resetValues()
            dispatch({ type: actionTypes.SET_VOTING_NUMBER, data: submissionResponse.code })
        } else {
            if (!submissionResponse.success && submissionResponse.error) {
                setErrorMessage(submissionResponse.error)
            }
        }
    }


    return(
        <div className={classes.outerContainer} id='get-code'>
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