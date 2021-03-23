import React from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'
import Buttons from '../buttons/Buttons'
import { StepType } from '../../../types/create-voting/StepType'
import { CountType } from '../../../types/create-voting/CountType'
import RadioButtons from './RadioButtons'



type SettingCountProps = {
    setActiveStep: (newStep: number) => void,
    updateStepsWithValues: (stepWithUpdatedValue: StepType) => void,
    step: CountType,
}

const SettingCount: React.FC<SettingCountProps> = ({ setActiveStep, updateStepsWithValues, step }) => {

    const classes = useStyles()

    const saveCountData = (updatedCount: string) => {
        updateStepsWithValues({ ...step, value: parseInt(updatedCount) })
    }

    return(
        <div className={classes.outerContainer}>
            <div className={classes.container} data-testid='SettingCount'>
                <Typography variant='h6' className={classes.text}>
                    NUMBER OF VOTES TO GIVE
                </Typography>
                <Typography className={classes.text}>
                    How many votes should one participant be able to give in total?
                </Typography>
                <RadioButtons
                    saveCountData={saveCountData}
                    selectedValue={step.value === undefined ? '' : step.value.toString() }
                />
                <>
                    <Buttons
                        activeStep={step.index}
                        setActiveStep={setActiveStep}
                        value={step.value}
                    />
                </>               
            </div>
        </div>      
    )
}

export default SettingCount