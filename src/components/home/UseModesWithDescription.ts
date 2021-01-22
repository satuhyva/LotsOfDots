import { modeOfUse } from '../../state/modeOfUse'


export type UseModeWithDescription = {
    modeOfUse: modeOfUse,
    title: string,
    to: string,
    description: string
}

export const UseModesWithDescription: UseModeWithDescription[] = [
    {
        modeOfUse: modeOfUse.CREATE,
        title: 'CREATE',
        to: '/create',
        description: 'With this tool you can create a new Dot Voting event.' 
    },
    {
        modeOfUse: modeOfUse.VOTE,
        title: 'VOTE',
        to: '/vote',
        description: 'If you have a voting code you can vote in a voting event.' 
    },
    {
        modeOfUse: modeOfUse.VIEW,
        title: 'VIEW RESULTS',
        to: '/view',
        description: 'If you have a voting code you can view current voting results.' 
    },
]
