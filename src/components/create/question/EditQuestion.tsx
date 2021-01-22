import React, { useState } from 'react'
import { useQuestionStyles } from './questionStyles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



const questionIsValid = (question: string): boolean => {
    return question.trim().length > 0
}

type EditQuestionProps = {
    currentQuestion: string,
    saveQuestion: (updatedQuestion: string) => void,
}



const EditQuestion: React.FC<EditQuestionProps> = ({ currentQuestion, saveQuestion }) => {

    const classes = useQuestionStyles()
    const [question, setQuestion] = useState(currentQuestion)

    const handleInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(event.target.value)
    }

    return(
        <div className={classes.container} data-testid='EditQuestion'>
            <Typography className={classes.text}>
                What is the voting about?
            </Typography>
            <Typography className={classes.text}>
                Type the voting question below. 
            </Typography>
            <TextField
                value={question}
                placeholder='For example: &#10;Where should we go on next holiday?'
                variant='outlined'
                multiline
                rows={5}
                onChange={handleInputChanged}
                className={classes.inputWidth}
                data-testid='edit-textfield'
            />
            {questionIsValid(question) &&
                <Button onClick={() => saveQuestion(question)} className={classes.iconButton} data-testid='save-edit-button'>
                    <Typography>SAVE</Typography>
                </Button>
            }
        </div>
    )
}

export default EditQuestion