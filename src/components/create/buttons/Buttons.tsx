import React from 'react'
import { useButtonStyles } from './buttonStyles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


type ButtonProps = {
    activeStep: number,
    setActiveStep: (newStep: number) => void,
    value: string | string[] | number | boolean | undefined
}


const Buttons: React.FC<ButtonProps> = ({ activeStep, setActiveStep, value }) => {


    const classes = useButtonStyles()

    const goBack = () => {
        setActiveStep(activeStep - 1)
    }
    const goFurther = () => {
        setActiveStep(activeStep + 1)
    }


    return(
        <div className={classes.buttonsContainer} data-testid='Buttons'>
            {activeStep > 0 &&
                <Button onClick={goBack} className={classes.iconButton} data-testid='button-back' >
                    <Typography className={classes.buttonText}>BACK</Typography>
                </Button>   
            }
            {activeStep < 4 && value !== undefined && value !== '' && !(Array.isArray(value) && value.length < 2) &&
                <Button onClick={goFurther} className={classes.iconButton} data-testid='button-next' >
                    <Typography  className={classes.buttonText}>NEXT</Typography>
                </Button>
            }
        </div>
      
    )
}

export default Buttons