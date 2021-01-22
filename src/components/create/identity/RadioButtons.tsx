import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import theme from '../../../utils/theme'


type RadioButtonProps = {
    saveIdentityData: (newValue: string) => void,
    selectedValue: string
}


const RadioButtons: React.FC<RadioButtonProps> = ({ saveIdentityData, selectedValue }) => {

    const handleSelectionChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        saveIdentityData(event.target.value)
    }

    const lightColor = theme.palette.primary.light
    const darkColor = theme.palette.primary.dark
    const falseProps = { style: { color: selectedValue === '' ? lightColor : (selectedValue === 'false' ? darkColor : lightColor) } }
    const trueProps = { style: { color: selectedValue === '' ? lightColor : (selectedValue === 'true' ? darkColor : lightColor) } }

    return(
        <div data-testid='RadioButtons'>
            <FormControl component="fieldset">
                <RadioGroup value={selectedValue} onChange={handleSelectionChanged} data-testid='radiogroup'>
                    <FormControlLabel
                        value='false'
                        control={<Radio {...falseProps}/>}
                        label='Anonymous voting'
                        {...falseProps}
                    />
                    <FormControlLabel
                        value='true'
                        control={<Radio {...trueProps}/>}
                        label='Show voter names'
                        {...trueProps}
                    />
                </RadioGroup>
            </FormControl>
        </div>
      
    )
}

export default RadioButtons