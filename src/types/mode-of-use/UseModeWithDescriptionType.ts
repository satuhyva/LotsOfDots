import { ModeOfUseEnum } from './ModeOfUseEnum'

export type UseModeWithDescriptionType = {
    modeOfUse: ModeOfUseEnum,
    title: string,
    to: string,
    description: string
}