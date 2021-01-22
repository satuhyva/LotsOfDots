import React from 'react'
import { useSettingIdentityStyles } from './settingIdentityStyles'
import Typography from '@material-ui/core/Typography'
import Buttons from '../buttons/Buttons'
import { Step, Identity } from '../../../types/StepsWithValues'
import RadioButtons from './RadioButtons'



type SettingIdentityProps = {
    setActiveStep: (newStep: number) => void,
    updateStepsWithValues: (stepWithUpdatedValue: Step) => void,
    step: Identity,
}

const SettingIdentity: React.FC<SettingIdentityProps> = ({ setActiveStep, updateStepsWithValues, step }) => {

    const classes = useSettingIdentityStyles()

    const saveIdentityData = (updatedIdentity: string) => {
        updateStepsWithValues({ ...step, value: updatedIdentity === 'true' ? true : false })
    }

    return(
        <div className={classes.outerContainer}>
            <div className={classes.container} data-testid='SettingIdentity'>
                <Typography variant='h6' className={classes.text}>
                IDENTITY
                </Typography>
                <Typography className={classes.text}>
                When showing the results of the voting event, 
                should the names of the voters behind each vote be revealed to all participants?
                </Typography>
                <RadioButtons
                    saveIdentityData={saveIdentityData}
                    selectedValue={step.value === undefined ? '' : step.value === true ? 'true' : 'false'}
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

export default SettingIdentity