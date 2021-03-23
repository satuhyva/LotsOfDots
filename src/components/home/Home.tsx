import React, { useContext } from 'react'
import AppContext from '../../state/AppContext'
import SelectModeOfUseButton from './SelectModeOfUseButton'
import { useStyles } from './styles'
import { ModesOfUseDictionary } from './ModesOfUseDictionary'
import { ModeOfUseEnum } from '../../types/mode-of-use/ModeOfUseEnum'
import { actionTypes } from '../../state/actions'


const Home: React.FC = () => {

    const { dispatch } = useContext(AppContext)
    const classes = useStyles()

    const selectModeOfUse = (modeOfUse: ModeOfUseEnum) => {
        dispatch({ type: actionTypes.SET_MODE_OF_USE, data: modeOfUse })
    }

    return(
        <div className={classes.container} data-testid='Home'>
            {ModesOfUseDictionary.map(modeWithDescription =>
                <SelectModeOfUseButton
                    key={modeWithDescription.title}
                    modeWithDescription={modeWithDescription}
                    selectModeOfUse={selectModeOfUse}
                />
            )}
        </div>
      
    )
}

export default Home