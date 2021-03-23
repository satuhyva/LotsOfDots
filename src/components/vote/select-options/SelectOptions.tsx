import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import AppContext from '../../../state/AppContext'
import { Button, Typography } from '@material-ui/core'
import VoteOption from '../vote-option/VoteOption'
import { Voting } from '../../../types/Voting'
import { SelectedVotingOptionsData, submitSelectedVotingOptions } from './service'
import { useStyles } from './styles'
import SnackbarAlert from '../../common-components/snackbar-alert/SnackbarAlert'
import { Alert, Severity } from '../../../types/Alert'
import { Link } from 'react-router-dom'



export enum VoteAction {
    VOTE = 'VOTE',
    UNVOTE = 'UNVOTE'
}


type SelectOptionsProps = {
    voterName: string | undefined
}

const getSelectionsDictionary = (votingData: Voting | undefined): undefined | Record<number, number> => {
    if (!votingData) return undefined
    const dictionary: Record<number, number> = {}
    votingData.optionVotes.forEach(item => {
        dictionary[item.id] = 0
    })
    return dictionary
}



const SelectOptions: React.FC<SelectOptionsProps> = ({ voterName }) => {

    const classes = useStyles()

    const { state } = useContext(AppContext)
    const [votingData] = useState(state.votingData)
    const [votingDone, setVotingDone] = useState(false)
    const [selectionDictionary, setSelectionDictionary] = useState(getSelectionsDictionary(state.votingData))
    const [alert, setAlert] = useState<Alert | undefined>(undefined)



    if (!votingData || !selectionDictionary) return null


    const changeSelection = (id: number, action: VoteAction) => {
        const votesGiven = votingData.optionVotes.reduce((total, current) => total + selectionDictionary[current.id], 0)
        if (action === VoteAction.VOTE && votesGiven < votingData.allowedCount) {
            const updated = { ...selectionDictionary }
            updated[id] = selectionDictionary[id] + 1
            setSelectionDictionary(updated)
        } else if (selectionDictionary[id] > 0) {
            const updated = { ...selectionDictionary }
            updated[id] = selectionDictionary[id] - 1
            setSelectionDictionary(updated)
        }
    }

    const getAnswers = (): number[] => {
        let answers: number[] = []
        for (const [optionId, numberOfVotes] of Object.entries(selectionDictionary)) {
            const numbers = new Array(numberOfVotes).fill(parseInt(optionId))
            answers = answers.concat(numbers)
        }
        return answers
    }

    const vote = async () => {
        const selectedVotingOptionsData: SelectedVotingOptionsData = {
            name: voterName,
            answers: getAnswers()
        }
        const answersSaved = await submitSelectedVotingOptions(selectedVotingOptionsData)
        if (answersSaved) {
            const alert: Alert = { isOpen: true, severity: Severity.SUCCESS, message: 'Votes successfully saved!', onClose: () => setAlert(undefined), autoHideDuration: 5000 }
            setAlert(alert)
            setVotingDone(true)
        } else {
            const alert: Alert = { isOpen: true, severity: Severity.ERROR, message: 'Could not submit votes!', onClose: () => setAlert(undefined), autoHideDuration: 5000 }
            setAlert(alert)
        }

        
    }

    
    const votesGiven = votingData.optionVotes.reduce((total, current) => total + selectionDictionary[current.id], 0)
    const remainingNumberOfVotes = votingData.allowedCount - votesGiven


    return(
        <div>
            <Typography variant='h5' className={classes.questionText}>
                <strong>{votingData.question}</strong>
            </Typography>
            {votingData.optionVotes.map(item => <VoteOption
                key={item.optionText}
                id={item.id}
                optionText={item.optionText}
                changeSelection={changeSelection}
                votes={selectionDictionary[item.id]}
                remaining={remainingNumberOfVotes}
                votingDone={votingDone}
            />)}
            <div className={classes.submitButtonContainer}>
                {!votingDone && votesGiven > 0 &&
                <Button onClick={vote} variant='contained'  className={classes.submitButton}>
                    <Typography className={classes.submitButtonText}>
                        SUBMIT VOTES
                    </Typography>
                </Button>
                }
                {votingDone && 
                    <Typography>
                        <Link to='/view' className={classes.linkText}>
                            View current voting situation 
                        </Link>
                    </Typography>
                }
            </div>

            {alert && <SnackbarAlert alert={alert}/>}
        </div>
      
    )
}

export default SelectOptions

