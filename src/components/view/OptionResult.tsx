
import { Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import AppContext from '../../state/AppContext'
import { OptionVote } from '../../types/OptionVote'
import { useStyles } from './styles'


type OptionResultProps = {
    option: OptionVote,
    showNames: boolean
}


const OptionResult: React.FC<OptionResultProps> = ({ option, showNames }) => {

    const { state } = useContext(AppContext)

    const classes = useStyles()


    console.log(state.votingData)
    let displayText = option.optionVoters.length + ' votes'
    if (showNames && option.optionVoters.length > 0) displayText += ', voters: '


    return (
        <div className={classes.optionContainer}>
            <Typography variant='h6' className={classes.optionText}><strong>{option.optionText}</strong></Typography>
            <Typography className={classes.votesNumberText}>{displayText}</Typography>
            {showNames &&
                <ul>
                    {(option.optionVoters as string[]).sort().map((voter, index) => 
                        <li key={voter + option.optionText + index}>
                            <Typography 
                                
                                className={classes.voterName}
                            >
                                {voter}
                            </Typography>
                        </li>
    
                    )

                    }
                </ul>
                
            }
            
        </div>
    )
}

export default OptionResult