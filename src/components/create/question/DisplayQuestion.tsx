import React from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit';


type DisplayQuestionProps = {
    currentQuestion: string,
    startEditing: () => void
}

const DisplayQuestion: React.FC<DisplayQuestionProps> = ({ currentQuestion, startEditing }) => {

    const classes = useStyles()

    return(
        <div className={classes.displayContainer} data-testid='DisplayQuestion'>
            <Typography className={classes.displayQuestion}>
                {currentQuestion} 
            </Typography>
            <IconButton onClick={startEditing} className={classes.editIconButton} data-testid='icon-button'>
                <EditIcon/>
            </IconButton>
            
        </div>
    )
}

export default DisplayQuestion