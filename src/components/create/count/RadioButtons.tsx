import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import theme from '../../../utils/theme'


type RadioButtonProps = {
    saveCountData: (newValue: string) => void,
    selectedValue: string
}


const RadioButtons: React.FC<RadioButtonProps> = ({ saveCountData, selectedValue }) => {

    const handleSelectionChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        saveCountData(event.target.value)
    }

    const selectedProps = { style: { color: theme.palette.primary.dark } }
    const notSelectedProps = { style: { color: theme.palette.primary.light } }

    return(
        <div data-testid='RadioButtons'>
            <FormControl component="fieldset">
                <RadioGroup value={selectedValue} onChange={handleSelectionChanged} data-testid='radiogroup'>
                    {['1', '2', '3', '4', '5'].map((count) => {
                        const currentProps = selectedValue === count ? selectedProps : notSelectedProps
                        return (
                            <FormControlLabel
                                key={count + 'count'}
                                value={count}
                                control={<Radio {...currentProps}/>}
                                label={count}
                                {...currentProps}
                            /> 
                        )
                    })}
                </RadioGroup>
            </FormControl>
        </div>
      
    )
}

export default RadioButtons