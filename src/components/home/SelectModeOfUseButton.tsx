import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useSelectModeOfUseButtonStyles } from './useSelectModeOfUseButtonStyles'
import { UseModeWithDescription } from './UseModesWithDescription'
import { modeOfUse } from '../../state/modeOfUse'
import * as BrowserRouter from 'react-router-dom'


interface UseModeSelectionButtonProps {
    modeWithDescription: UseModeWithDescription,
    selectModeOfUse: (modeOfUse: modeOfUse) => void
}


const SelectModeOfUseButton: React.FC<UseModeSelectionButtonProps> = ({ modeWithDescription, selectModeOfUse }) => {

    const classes = useSelectModeOfUseButtonStyles()

    return(
        <Button
            className={classes.button}
            variant='contained'
            onClick={() => selectModeOfUse(modeWithDescription.modeOfUse)}
            component={BrowserRouter.Link} to={modeWithDescription.to}
            data-testid={`select-button-${modeWithDescription.title}`}
        >
            <div className={classes.buttonContentsContainer}>
                <Typography variant='h6' className={classes.modeTitle} data-testid={`mode-title-${modeWithDescription.title}`}>
                    {modeWithDescription.title}
                </Typography>                
                <Typography className={classes.modeDescription}  data-testid={`mode-description-${modeWithDescription.title}`}>
                    {modeWithDescription.description}
                </Typography>  
            </div>
        </Button>
    )
}

export default SelectModeOfUseButton

