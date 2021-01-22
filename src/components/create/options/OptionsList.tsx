import React from 'react'
import { useVotingOptionsStyles } from './votingOptionsStyles'
import Typography from '@material-ui/core/Typography'
// import { Step, Options } from '../../../types/StepsWithValues'
import { OptionListActions } from './VotingOptions'
import { IconButton, List, ListItemText } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider'



type OptionsListProps = {
    currentOptions: string[],
    updateOptionsList: (action: OptionListActions, newData: string, oldData?: string) => void,
    selectOptionForEditing: (option: string) => void,
}

const OptionsList: React.FC<OptionsListProps> = ({ currentOptions, updateOptionsList, selectOptionForEditing }) => {

    const classes = useVotingOptionsStyles()

    const removeOptionFromList = (optionToRemove: string) => {
        updateOptionsList(OptionListActions.REMOVE, '', optionToRemove)
    }
    const editOption = (optionToEdit: string) => {
        selectOptionForEditing(optionToEdit)
    }

    if (currentOptions.length === 0) {
        return (
            <div className={classes.container} data-testid='CreateQuestion'>
                <Typography className={classes.text}>
                No options have been added yet.
                </Typography>
            </div>
        )
    }

    return(

        <List data-testid='OptionsList'>
            {currentOptions.map(option => {
                return (
                    <React.Fragment key={option}>
                        <ListItem>
                            <ListItemText>
                                <Typography className={classes.listText}>
                                    {option}
                                </Typography>
                            </ListItemText>
                            <IconButton className={classes.listIconButton} onClick={() => editOption(option)}>
                                <EditIcon className={classes.listIcon}/>
                            </IconButton>                                      
                            <IconButton className={classes.listIconButton} onClick={() => removeOptionFromList(option)}>
                                <DeleteIcon className={classes.listIcon}/>
                            </IconButton>                           
                        </ListItem>
                        <Divider/>
                    </React.Fragment>
                     
                )
            })}             
        </List>
   
    )
}

export default OptionsList