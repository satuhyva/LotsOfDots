import React, { useState } from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'
import Buttons from '../buttons/Buttons'
import { StepType } from '../../../types/create-voting/StepType'
import { OptionsType } from '../../../types/create-voting/OptionsType'
import OptionsList from './OptionsList'
import AddOrEditOption from './AddOrEditOption'
import { getUpdatedCurrentOptionsList } from './getUpdatedCurrentOptionsList'
import Button from '@material-ui/core/Button'




type VotingOptionsProps = {
    setActiveStep: (newStep: number) => void,
    updateStepsWithValues: (stepWithUpdatedValue: StepType) => void,
    step: OptionsType,
}

export enum OptionListActions {
    'ADD' = 'add new item to list',
    'MODIFY' = 'modify item on list',
    'REMOVE' = 'remove item from list'
}



const VotingOptions: React.FC<VotingOptionsProps> = ({ setActiveStep, updateStepsWithValues, step }) => {

    const classes = useStyles()
    const [currentOptions, setCurrentOptions] = useState<string[]>(step.value === undefined ? [] : step.value)
    const [isEditing, setIsEditing] = useState<string | undefined>(currentOptions.length > 1 ? undefined : '')
 

    const updateOptionsList = (action: OptionListActions, newData: string, oldData?: string) => {
        const updatedList = getUpdatedCurrentOptionsList(currentOptions, action, newData, oldData)
        setCurrentOptions(updatedList)
        setIsEditing(undefined)
        updateStepsWithValues({ ...step, value: updatedList })
    }
    const selectOptionForEditing = (option: string) => {
        setIsEditing(option)
    }


    return(
        <div className={classes.outerContainer}>
            <div className={classes.container} data-testid='VotingOptions'>
                <Typography variant='h6' className={classes.text}>
                    VOTING OPTIONS
                </Typography>
                <OptionsList currentOptions={currentOptions} updateOptionsList={updateOptionsList} selectOptionForEditing={selectOptionForEditing}/>
                {(currentOptions.length < 2 || isEditing !== undefined) ?
                    <AddOrEditOption
                        updateOptionsList={updateOptionsList}
                        isEditing={isEditing}
                        currentOptions={currentOptions}
                    />
                    :
                    <>
                        <Button onClick={() => selectOptionForEditing('')} className={classes.addButton} data-testid='button-add' >
                            <Typography  className={classes.buttonText}>+ ADD NEW</Typography>
                        </Button>
                    
                        <Buttons
                            activeStep={step.index}
                            setActiveStep={setActiveStep}
                            value={currentOptions}
                        />
                    </>
                    
                }
            </div>
        </div>
       
        
      
    )
}

export default VotingOptions