import { ModeOfUseEnum } from '../../types/mode-of-use/ModeOfUseEnum'
import { UseModeWithDescriptionType } from '../../types/mode-of-use/UseModeWithDescriptionType'


export const ModesOfUseDictionary: UseModeWithDescriptionType[] = [
    {
        modeOfUse: ModeOfUseEnum.CREATE,
        title: 'CREATE',
        to: '/create',
        description: 'With this tool you can create a new Dot Voting event.' 
    },
    {
        modeOfUse: ModeOfUseEnum.VOTE,
        title: 'VOTE',
        to: '/vote',
        description: 'If you have a voting code you can vote in a voting event.' 
    },
    {
        modeOfUse: ModeOfUseEnum.VIEW,
        title: 'VIEW RESULTS',
        to: '/view',
        description: 'If you have a voting code you can view current voting results.' 
    },
]
