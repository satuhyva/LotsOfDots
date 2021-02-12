import React, { useContext } from 'react'
import AppContext from '../../state/AppContext'
import SelectModeOfUseButton from './SelectModeOfUseButton'
import { useStyles } from './styles'
import { UseModesWithDescription } from './ModesOfUseDictionary'
import { modeOfUse } from '../../types/ModeOfUse'
import { actionTypes } from '../../state/actions'


const Home: React.FC = () => {

    const { dispatch } = useContext(AppContext)
    const classes = useStyles()

    const selectModeOfUse = (modeOfUse: modeOfUse) => {
        dispatch({ type: actionTypes.SET_MODE_OF_USE, data: modeOfUse })
    }

    return(
        <div className={classes.container} data-testid='Home'>
            {UseModesWithDescription.map(modeWithDescription =>
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