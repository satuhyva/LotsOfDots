import React, { useContext } from 'react'
import AppContext from '../../state/AppContext'
import EnterVotingCode from '../vote/enter-voting-code/EnterVotingCode'
import VotingResults from './VotingResults'
import { useStyles } from './styles'
import { Typography } from '@material-ui/core'



const ViewVoting: React.FC = () => {

    const { state } = useContext(AppContext)
    const classes = useStyles()

    return(
        <div>
            <Typography variant='h5' className={classes.text}>
                <strong>RESULTS</strong>
            </Typography>
            {state.votingNumber === undefined ?
                <EnterVotingCode/>
                :
                <VotingResults/>
            }
        </div>
      
    )
}

export default ViewVoting