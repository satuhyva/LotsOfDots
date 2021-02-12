import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { VoteAction } from '../select-options/SelectOptions'
import { useStyles } from './styles'


type VoteOptionProps = {
    id: number,
    optionText: string,
    votes: number,
    changeSelection: (id: number, action: VoteAction) => void,
    remaining: number,
    votingDone: boolean,
}



const VoteOption: React.FC<VoteOptionProps> = ({ id, optionText, votes, changeSelection, remaining, votingDone }) => {

    const classes = useStyles()

    
    const voteThisOption = (event: React.MouseEvent<HTMLElement>, text: VoteAction) => {
        event.preventDefault()
        changeSelection(id, text)
    }
    
    return(
        <div>
            <Typography variant='h6' className={classes.optionText}>{optionText}</Typography>
            <div className={classes.buttonsContainer}>
                {(new Array(votes).fill(VoteAction.UNVOTE).map((item, index) => {
                    return (
                        <Button
                            key={index + id + 'unvote'}
                            onClick={(event) => voteThisOption(event, item)}
                            className={classes.unvoteButton}
                            disabled={votingDone}
                        >
                            {item}
                        </Button>
                    )
                }))}
                {(new Array(remaining).fill(VoteAction.VOTE).map((item, index) => {
                    return (
                        <Button
                            key={index + id + 'vote'}
                            onClick={(event) => voteThisOption(event, item)}
                            className={classes.voteButton}
                            disabled={votingDone}
                        >
                            {item}
                        </Button>
                    )
                }))}
            </div>
        </div>
      
    )
}

export default VoteOption



