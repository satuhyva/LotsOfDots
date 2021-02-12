import React, { useContext, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useStyles } from './styles'
import { getCodeValidity } from './getCodeValidity'
import AppContext from '../../../state/AppContext'
import { actionTypes } from '../../../state/actions'



const EnterVotingCode: React.FC = () => {

    const classes = useStyles()
    const [code, setCode] = useState('')
    const { dispatch } = useContext(AppContext)
 
    const handleInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value)
    }

    const storeVotingCode = () => {
        dispatch({ type: actionTypes.SET_VOTING_NUMBER, data: code })
    }    



    return(
        <div className={classes.container}>
            <TextField
                value={code}
                variant='outlined'
                label='Voting code (6 digits)'
                placeholder='Type the 6-digit code here'
                onChange={handleInputChanged}
                className={classes.textFieldInput}
                id='code-textfield'
            />
            {getCodeValidity(code) &&
                <Button onClick={storeVotingCode} className={classes.button} id='fetchData-button'>
                    <Typography>GET VOTING</Typography>
                </Button>
            }
        </div>
      
    )
}

export default EnterVotingCode