import { OptionListActions } from './VotingOptions'

export const getUpdatedCurrentOptionsList = (currentList: string[], action: OptionListActions, newData: string, oldData?: string): string[] => {
    const updatedOptionsList = [...currentList]
    console.log(action)
    switch (action) {
    case OptionListActions.ADD:
        updatedOptionsList.push(newData)
        return updatedOptionsList
    case OptionListActions.MODIFY:
        return updatedOptionsList.map(option => {
            if (oldData === option) return newData
            else return option
        })
    case OptionListActions.REMOVE:
        return updatedOptionsList.filter(option => option !== oldData)
    default:
        return currentList
    }
}