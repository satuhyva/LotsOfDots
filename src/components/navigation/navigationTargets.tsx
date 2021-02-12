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

    const commonProps = { style: { color: theme.palette.primary.contrastText } }

    return [
        { label: 'HOME', to: '/home', icon: <HomeIcon fontSize='large' { ...commonProps } /> },
        { label: 'CREATE NEW VOTING EVENT', to: '/create', icon: <CreateIcon  fontSize='large'  { ...commonProps }/> },
        { label: 'VOTE IN EXISTING VOTING', to: '/vote', icon: <PersonAddIcon fontSize='large'  { ...commonProps }/> },
        { label: 'VIEW CURRENT RESULTS', to: '/view', icon: <AssessmentIcon fontSize='large'  { ...commonProps }/> },
    ]
}


