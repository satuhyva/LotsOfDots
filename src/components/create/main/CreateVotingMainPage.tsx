import React, { useState } from 'react'
import CreateVotingStepper from '../stepper/CreateVotingStepper'
import { StepsWithValuesType } from '../../../types/create-voting/StepsWithValuesType'
import { initialStepValues } from '../stepper/initialStepValues'
import CreateVotingTitle from './CreateVotingTitle'
import CreateQuestion from '../question/CreateQuestion'
import { StepType } from '../../../types/create-voting/StepType'
import { getStepsWithUpdatedValues } from './getStepsWithUpdatedValues'
import SettingIdentity from '../identity/SettingIdentity'
import VotingOptions from '../options/VotingOptions'
import SettingCount from '../count/SettingCount'
import GetCode from '../code/GetCode'
import Success from '../success/Success'



const CreateVotingMainPage: React.FC = () => {


    const [activeStep, setActiveStep] = useState(0)
    const [stepsWithValues, setStepsWithValues] = useState<StepsWithValuesType>(initialStepValues)
    const [code, setCode] = useState<string | undefined>(undefined)

    const updateStepsWithValues = (stepWithUpdatedValue: StepType) => {
        const stepsWithUpdatedValues = getStepsWithUpdatedValues(stepWithUpdatedValue, stepsWithValues)
        setStepsWithValues(stepsWithUpdatedValues)
    }

    const commonProps = {
        setActiveStep: setActiveStep,
        updateStepsWithValues: updateStepsWithValues
    }

    const resetValues = () => {
        setStepsWithValues(initialStepValues)
    }

    return(
        <div>
            {code === undefined ?
                <>
                    <CreateVotingTitle/>
                    <CreateVotingStepper activeStep={activeStep} setActiveStep={setActiveStep} stepsWithValues={stepsWithValues}/>
                    {activeStep === 0 && <CreateQuestion {...commonProps} step={stepsWithValues[0]} />}
                    {activeStep === 1 && <VotingOptions {...commonProps} step={stepsWithValues[1]} />}
                    {activeStep === 2 && <SettingCount {...commonProps} step={stepsWithValues[2]} />}
                    {activeStep === 3 && <SettingIdentity {...commonProps} step={stepsWithValues[3]} />}
                    {activeStep === 4 && <GetCode {...commonProps} stepsWithValues={stepsWithValues} setCode={setCode} resetValues={resetValues}/>}
                </>
                :
                <Success code={code}/>
            }
        </div>
      
    )
}

export default CreateVotingMainPage
