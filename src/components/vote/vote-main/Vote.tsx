import React, { useContext } from 'react'
import EnterVotingCode from '../enter-voting-code/EnterVotingCode'
import AppContext from '../../../state/AppContext'
import PerformVoting from '../perform-voting/PerformVoting'



const Vote: React.FC = () => {

    const { state } = useContext(AppContext)


    return(
        <div>
            {state.votingNumber === undefined ?
                <EnterVotingCode/>
                :
                <PerformVoting/>
            }
        </div>
      
    )
}

export default Vote