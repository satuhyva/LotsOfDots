import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-router-dom'
import theme from '../../utils/theme'
import { getNavigationTargets } from './navigationTargets'
import Typography from '@material-ui/core/Typography'
import { useNavigationStyles } from './navigationStyles'


// https://dev.to/rossanodan/building-a-navigation-drawer-with-material-ui-and-react-router-dom-1j6l


const useNavigationMenuStyles = makeStyles({
    paper: { background: theme.palette.primary.main, width: '100%' }
})



const Navigation: React.FC = () => {

    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false)
    const navigationDrawerStyles = useNavigationMenuStyles()
    const navigationTargets = getNavigationTargets()
    const classes = useNavigationStyles()

    const handleDrawerStateChanged = (newState: boolean) => (event: React.KeyboardEvent | React.MouseEvent)  => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return
        }
        setDrawerIsOpen(newState)
    }


    return(
        <div className={classes.navigationMenu}>
            <IconButton onClick={handleDrawerStateChanged(true)}>
                <MenuIcon className={classes.icon}/>
            </IconButton>
            <Drawer
                open={drawerIsOpen}
                onClose={handleDrawerStateChanged(false)}
                classes={{ paper: navigationDrawerStyles.paper }}
            >
                <div role='presentation' onClick={handleDrawerStateChanged(false)} onKeyDown={handleDrawerStateChanged(false)} >
                    <List>
                        <React.Fragment key='listHeader'>
                            <ListItem className={classes.background}>
                                <Typography variant='h5' className={classes.navigationContentsTitle}>
                                LOTS OF DOTS
                                </Typography>
                            </ListItem>
                            <Divider  className={classes.divider}/>
                        </React.Fragment>
                        {navigationTargets.map(target => {
                            return (
                                <React.Fragment key={target.label}>
                                    <ListItem component={Link} to={target.to} className={classes.background}>
                                        <ListItemIcon>
                                            {target.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={target.label} className={classes.navigationContentsItem}/>
                                    </ListItem>
                                    <Divider  className={classes.divider}/>
                                </React.Fragment>
                            )
                        })}
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

export default Navigation