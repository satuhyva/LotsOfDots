import React, { useState } from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'
import Buttons from '../buttons/Buttons'
import { Step, Question } from '../../../types/StepsWithValues'
import EditQuestion from './EditQuestion'
import DisplayQuestion from './DisplayQuestion'


type CreateQuestionProps = {
    setActiveStep: (newStep: number) => void,
    updateStepsWithValues: (stepWithUpdatedValue: Step) => void,
    step: Question,
}

const CreateQuestion: React.FC<CreateQuestionProps> = ({ setActiveStep, updateStepsWithValues, step }) => {

    const classes = useStyles()
    const [isEditing, setIsEditing] = useState(step.value === undefined ? true : false)

    const saveQuestion = (updatedQuestion: string) => {
        setIsEditing(false)
        updateStepsWithValues({ ...step, value: updatedQuestion })
    }

    const currentQuestion = step.value === undefined ? '' : step.value

    return(
        <div className={classes.container} data-testid='CreateQuestion'>
            <Typography variant='h6' className={classes.text}>
                QUESTION
            </Typography>
            {isEditing ?
                <EditQuestion
                    currentQuestion={currentQuestion}
                    saveQuestion={saveQuestion}
                />
                :
                <>
                    <DisplayQuestion
                        currentQuestion={currentQuestion}
                        startEditing={() => setIsEditing(true)}
                    />
                    <Buttons
                        activeStep={step.index}
                        setActiveStep={setActiveStep}
                        value={currentQuestion}
                    />
                </>
            }
        </div>
      
    )
}

export default CreateQuestion