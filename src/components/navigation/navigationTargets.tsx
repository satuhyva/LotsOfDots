import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import CreateIcon from '@material-ui/icons/Create'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import AssessmentIcon from '@material-ui/icons/Assessment'
import theme from '../../utils/theme'


type NavigationTarget = {
    label: string,
    to: string,
    icon: React.ReactNode
}


export const getNavigationTargets = (): NavigationTarget[] => {

    return [
        { label: 'HOME', to: '/home', icon: <HomeIcon fontSize='large' style={{ color: theme.palette.primary.contrastText }} /> },
        { label: 'CREATE NEW VOTING EVENT', to: '/create', icon: <CreateIcon  fontSize='large' style={{ color: theme.palette.primary.contrastText }}/> },
        { label: 'VOTE IN EXISTING VOTING', to: '/vote', icon: <PersonAddIcon fontSize='large' style={{ color: theme.palette.primary.contrastText }}/> },
        { label: 'VIEW CURRENT RESULTS', to: '/view', icon: <AssessmentIcon fontSize='large' style={{ color: theme.palette.primary.contrastText }}/> },
    ]
}


