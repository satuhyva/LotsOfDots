import React from 'react'
import { useGetCodeStyles } from './getCodeStyles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


type ButtonProps = {
    setActiveStep: (newStep: number) => void,
    submitData: () => void,
    valuesAreMissing: boolean
}


const Buttons: React.FC<ButtonProps> = ({ setActiveStep, submitData, valuesAreMissing }) => {


    const classes = useGetCodeStyles()

    const goBack = () => {
        setActiveStep(3)
    }


    return(
        <div>
            {!valuesAreMissing &&
                <Typography className={classes.noteText}>
                    NOTE: Once you submit the voting data you cannot edit the voting parameters anymore!
                </Typography>
            }
            <div className={classes.buttonsContainer} data-testid='Buttons'>
                <Button onClick={goBack} className={classes.iconButton} data-testid='button-back' >
                    <Typography className={classes.buttonText}>BACK</Typography>
                </Button>   
                {!valuesAreMissing &&
                <Button onClick={submitData} className={classes.iconButton} data-testid='button-submit' >
                    <Typography  className={classes.buttonText}>SUBMIT</Typography>
                </Button>
                }
            </div>    
        </div>

      
    )
}

export default Buttons