import React, { useContext, useState } from 'react'
import AppContext from '../../../state/AppContext'
import { useGetVotingData } from '../get-data/useGetVotingData'
import ErrorDisplay from '../error-display/ErrorDisplay'
import EnterName from '../enter-name/EnterName'
import SelectOptions from '../select-options/SelectOptions'



const PerformVoting: React.FC = () => {

    const [voterName, setVoterName] = useState<string | undefined>(undefined)
    const { state } = useContext(AppContext)
    const { errorInGettingData } = useGetVotingData()


    if (!state.votingNumber) return null
    if (errorInGettingData) return <ErrorDisplay votingNumber={state.votingNumber}/>
    if (!state.votingData) return null
    if (state.votingData.showNames && !voterName) return <EnterName setVoterName={setVoterName}/>
    return <SelectOptions voterName={voterName}/>
}

export default PerformVoting

