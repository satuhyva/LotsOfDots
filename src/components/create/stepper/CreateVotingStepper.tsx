import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import Typography from '@material-ui/core/Typography'
import StepLabel from '@material-ui/core/StepLabel'
import StepButton from '@material-ui/core/StepButton'
import { useCreateVotingStepperStyles } from './createVotingStepperStyles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import HelpIcon from '@material-ui/icons/Help'
import { StepsWithValues } from '../../../types/StepsWithValues'


type CreateStepperProps = {
    activeStep: number,
    setActiveStep: (newStep: number) => void,
    stepsWithValues: StepsWithValues
}

const getIcon = (isActiveStep: boolean, hasAValue: boolean) => {
    const classes = useCreateVotingStepperStyles()
    const iconClass = isActiveStep ? classes.iconActive : classes.iconNotActive
    if (hasAValue) {
        return <CheckCircleIcon className={iconClass}/>
    }
    return <HelpIcon className={iconClass}/>
}



const CreateVotingStepper: React.FC<CreateStepperProps> = ({ activeStep, setActiveStep, stepsWithValues }) => {

    const classes = useCreateVotingStepperStyles()

    return(
        <Stepper alternativeLabel nonLinear activeStep={activeStep} data-testid='stepper'>
            {stepsWithValues.map(step => {
                const isActiveStep: boolean = step.index === activeStep
                return (
                    <Step key={step.label}>
                        <StepButton onClick={() => setActiveStep(step.index)} data-testid={`step-button-${step.index}`}>
                            <StepLabel
                                StepIconComponent={() => getIcon(isActiveStep, step.value !== undefined)}
                            >
                                <Typography className={isActiveStep ? classes.stepLabelTextActive : classes.stepLabelTextNotActive}>
                                    {step.label}
                                </Typography>  
                            </StepLabel>
                        </StepButton>
                    </Step>
                )
            })}
        </Stepper>      
    )
}

export default CreateVotingStepper
