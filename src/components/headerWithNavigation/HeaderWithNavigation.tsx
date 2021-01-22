import React, { useContext } from 'react'
import AppContext from '../../state/context'
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import { useHeaderWithNavigationStyles } from './headerWithNavigationStyles'
import Divider from '@material-ui/core/Divider'


const HeaderWithNavigation: React.FC = () => {

    const classes = useHeaderWithNavigationStyles()
    const { state } = useContext(AppContext)

    return(
        <div className={state.modeOfUse !== undefined ? classes.outerContainer : classes.outerContainerNoMode}>
            <Divider className={classes.divider}/>
            <div className={classes.innerContainer}>
                {state.modeOfUse !== undefined && <Navigation/>}
                <Header/>
            </div>
            <Divider className={classes.divider}/>
        </div>
    )
}

export default HeaderWithNavigation