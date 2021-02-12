import React, { useState } from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'
import { OptionListActions } from './VotingOptions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'




const optionIsValid = (option: string, currentOptions: string[]): boolean => {
    return option.trim().length > 0 && !currentOptions.includes(option)
}


type AddOrEditOptionProps = {
    updateOptionsList: (action: OptionListActions, newData: string, oldData?: string) => void,
    isEditing: string | undefined,
    currentOptions: string[]
}



const AddOrEditOption: React.FC<AddOrEditOptionProps> = ({ updateOptionsList,  isEditing, currentOptions }) => {

    const classes = useStyles()
    const [option, setOption] = useState(isEditing !== undefined ? isEditing : '')
    const [actionType] = useState(isEditing === undefined ? OptionListActions.ADD : (isEditing !== '' ? OptionListActions.MODIFY : OptionListActions.ADD))

    const handleInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOption(event.target.value)
    }

    const saveOption = () => {
        const oldData = isEditing !== '' ? isEditing : ''
        updateOptionsList(actionType, option, oldData)
        setOption('')
    }    


    return(
        <div className={classes.container} data-testid='AddOrEditOption'>
            <TextField
                value={option}
                variant='outlined'
                placeholder='Type a new option here.'
                multiline
                rows={5}
                onChange={handleInputChanged}
                className={classes.inputWidth}
                data-testid='option-textfield'
            />
            {optionIsValid(option, currentOptions) &&
                <Button onClick={saveOption} className={classes.iconButton} data-testid='save-option-button'>
                    <Typography>SAVE</Typography>
                </Button>
            }
        </div>
      
    )
}

export default AddOrEditOption