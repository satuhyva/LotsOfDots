import React, { useContext } from 'react'
import EnterVotingCode from '../enter-voting-code/EnterVotingCode'
import AppContext from '../../../state/AppContext'
import PerformVoting from '../perform-voting/PerformVoting'
import { useStyles } from './styles'
import { Typography } from '@material-ui/core'


const Vote: React.FC = () => {

    const { state } = useContext(AppContext)
    const classes = useStyles()

    return(
        <div>
            <Typography variant='h5' className={classes.text}>
                <strong>VOTE</strong>
            </Typography>
            {state.votingNumber === undefined ?
                <EnterVotingCode/>
                :
                <PerformVoting/>
            }
        </div>
      
    )
}

export default Vote