import React, { useState } from 'react'
import CreateVotingStepper from './stepper/CreateVotingStepper'
import { StepsWithValues } from '../../types/StepsWithValues'
import { initialStepValues } from './stepper/initialStepValues'
import CreateVotingTitle from './CreateVotingTitle'
import CreateQuestion from './question/CreateQuestion'
import { Step } from '../../types/StepsWithValues'
import { getStepsWithUpdatedValues } from './getStepsWithUpdatedValues'
import SettingIdentity from './identity/SettingIdentity'
import VotingOptions from './options/VotingOptions'
import SettingCount from './count/SettingCount'
import GetCode from './code/GetCode'
import Success from './success/Success'


const CreateVoting: React.FC = () => {


    const [activeStep, setActiveStep] = useState(0)
    const [stepsWithValues, setStepsWithValues] = useState<StepsWithValues>(initialStepValues)
    const [code, setCode] = useState<string | undefined>(undefined)

    const updateStepsWithValues = (stepWithUpdatedValue: Step) => {
        const stepsWithUpdatedValues = getStepsWithUpdatedValues(stepWithUpdatedValue, stepsWithValues)
        setStepsWithValues(stepsWithUpdatedValues)
    }

    const commonProps = {
        setActiveStep: setActiveStep,
        updateStepsWithValues: updateStepsWithValues
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
                    {activeStep === 4 && <GetCode {...commonProps} stepsWithValues={stepsWithValues} setCode={setCode}/>}
                </>
                :
                <Success stepsWithValues={stepsWithValues} code={code}/>
            }
        </div>
      
    )
}

export default CreateVoting
