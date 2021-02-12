import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useStyles } from './styles'


type EnterNameProps = {
    setVoterName: (name: string) => void
}


const EnterName: React.FC<EnterNameProps> = ({ setVoterName }) => {

    const classes = useStyles()
    const [name, setName] = useState('')

    const handleInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const saveName = () => {
        setVoterName(name)
    }

    return(
        <div className={classes.container}>
            <Typography className={classes.instructionText}>Please give your name.</Typography>
            <Typography>(Note that others will see how you voted.)</Typography>
            <TextField
                value={name}
                variant='outlined'
                label='Your name'
                placeholder='Type your name here'
                onChange={handleInputChanged}
                className={classes.textFieldInput}
                id='name-textfield'
            />
            {name.length > 3 &&
                <Button onClick={saveName} className={classes.button} id='fetchData-button'>
                    <Typography>SAVE NAME</Typography>
                </Button>
            }
        </div>
      
    )
}

export default EnterName