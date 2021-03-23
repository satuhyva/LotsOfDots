import { Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import AppContext from '../../state/AppContext'
import ErrorDisplay from '../vote/error-display/ErrorDisplay'
import { useGetVotingData } from '../vote/get-data/useGetVotingData'
import { useStyles } from './styles'
import { getSortedVotings } from './getSortedVotings'
import OptionResult from './OptionResult'



const VotingResults: React.FC = () => {

    const { state } = useContext(AppContext)
    const { errorInGettingData } = useGetVotingData()
    const classes = useStyles()

    if (!state.votingNumber) return null
    if (errorInGettingData) return <ErrorDisplay votingNumber={state.votingNumber}/>
    if (!state.votingData) return null

    const votingData = state.votingData
    const sortedVotingOptions = getSortedVotings(votingData.optionVotes)

    return (
        <div>
            <Typography variant='h5' className={classes.questionText}>
                <strong>{votingData.question}</strong>
            </Typography>
            {sortedVotingOptions.map(result => 
                <OptionResult 
                    key={result.id} 
                    option={result}
                    showNames={votingData.showNames}
                />)
            }
        </div>
    )
}

export default VotingResults